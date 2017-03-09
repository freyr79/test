// @flow

import React from 'react'
import { ActivityIndicator, 
  ScrollView, 
  Text, 
  Image, 
  View,
  AsyncStorage } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import ConnectButton from '../Components/ConnectButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Display from 'react-native-display'
import DeviceInfo from 'react-native-device-info'

// Styles
import styles from './Styles/DeviceConnectionStyle'
import deviceStyles from './Styles/DeviceInfoScreenStyle'

const HARDWARE_DATA = [
  {title: 'Device Manufacturer', info: 'SmartPetHealthcare'},
  {title: 'Device Model', info: 'Smart Bowl'},
  {title: 'Device Unique ID', info: DeviceInfo.getUniqueID()},
]

var DEVICE_KEY = 'device'

export default class DeviceConnection extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      indicatorAnimating: false,
      found: false,
      showDeviceInfo: false,
      device: ''
    };
  }

  componentDidMount() {
    this._loadInitialState().done();

  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem(DEVICE_KEY);
      if (value !== null){
        var data = JSON.parse(value)
        this.setState({found:true, showDeviceInfo:true, device: data});
      }
    } catch (error) {
      
    }
  };
  
  toggleDevice = () => {
    this.setState({indicatorAnimating: !this.state.indicatorAnimating});
      setTimeout(() => {
        this.foundDevice();
      }, 1000);
  }

  foundDevice = async () => {

      this.setState({
        found: !this.state.found, 
        indicatorAnimating: !this.state.indicatorAnimating,
        showDeviceInfo : !this.state.showDeviceInfo,
        msg : !this.state.found ? 'Device is connected' : 'Device is disconnected'
      })

      if(this.state.device == ''){
        try {
          await AsyncStorage.setItem(DEVICE_KEY, JSON.stringify(HARDWARE_DATA));
          
        } catch (error) {
        }
        window.alert(this.state.msg);
      }else {
        try {
          await AsyncStorage.removeItem(DEVICE_KEY);
        } catch (error) {
        }
        window.alert(this.state.msg)
      }   
      
  }

  getText = () => {
    if (this.state.indicatorAnimating) {
      return 'Searching...'
    }
    else if(this.state.found){
      return 'Disconnect'
    }
    else {
      return 'Connect'
    }
  }

  getDisplay = () => {
    return this.state.indicatorAnimating
  }

  getDeviceDisplay = () => {
    return this.state.found
  }

  getDeviceInfo = () => {
    if(this.state.device == ''){
      return HARDWARE_DATA
    }
    return this.state.device
  }

  renderCard (cardTitle: string, rowData: Array<Object>) {
    return (
      <View style={deviceStyles.cardContainer}>
        <Text style={deviceStyles.cardTitle}>{cardTitle.toUpperCase()}</Text>
        {this.renderRows(rowData)}
      </View>
    )
  }

  renderRows (rowData: Array<Object>) {
    return rowData.map((cell) => {
      const {title, info} = cell
      return (
        <View key={title} style={deviceStyles.rowContainer}>
          <View style={deviceStyles.rowLabelContainer}>
            <Text style={deviceStyles.rowLabel}>{title}</Text>
          </View>
          <View style={deviceStyles.rowInfoContainer}>
            <Text style={deviceStyles.rowInfo}>{info}</Text>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.white_background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.centered}>
            <Image source={Images.bowl} style={styles.logo} />
          </View>

          <View style={styles.mySection}>
            <Text style={styles.mainText}>Smart Bowl</Text>
          </View>
          
          <Display enable={this.getDeviceDisplay()}>
            {this.renderCard('Device Information', this.getDeviceInfo())}
          </Display>

          <Display enable={this.getDisplay()} >
            <ActivityIndicator
              animating={this.state.indicatorAnimating}
              style={[styles.centering, {height: 80}]}
              size="large"
            />
          </Display>
          
          <ConnectButton text={this.getText()} onPress={this.toggleDevice} />        

        </ScrollView>
      </View>
    )
  }
}
