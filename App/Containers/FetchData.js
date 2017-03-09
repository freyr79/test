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
import deviceStyles from './Styles/FetchDataStyle'

const MEAL_DATA = [
  {title: '식사량', info: '240g'},
  {title: '측정 시간', info: '2017-02-13 13:00:12'},
]

var DEVICE_KEY = 'meals'

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
  
  toggleDevice = () => {
    this.setState({indicatorAnimating: !this.state.indicatorAnimating});
      setTimeout(() => {
        this.foundDevice();
      }, 5000);
  }

  foundDevice = async () => {

      this.setState({
        found: !this.state.found, 
        indicatorAnimating: !this.state.indicatorAnimating,
        showDeviceInfo : !this.state.showDeviceInfo,
      })

      if(this.state.device == ''){
        try {
          await AsyncStorage.setItem(DEVICE_KEY, JSON.stringify(MEAL_DATA));
        } catch (error) {
        }
        
      }else {
        try {
          await AsyncStorage.removeItem(DEVICE_KEY);
        } catch (error) {
        }
        
      }   
  }

  getText = () => {
    if (this.state.indicatorAnimating) {
      return '가져오는 중...'
    }
    else {
      return '식사량 가져오기'
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
      return MEAL_DATA
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

          <Display enable={true}>
            {this.renderCard('최근 식사량', this.getDeviceInfo())}
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
