// @flow

import React from 'react'
import { ActivityIndicator, 
  ScrollView,
  DatePickerIOS, 
  Text, 
  TextInput,
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
import deviceStyles from './Styles/InputDataStyle'

export default class InputData extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  save = () => {
      window.alert('입력되었습니다.')
      return ;
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.white_background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.bowl} style={styles.logo} />
          </View>
          <View style={styles.centered}>
            <Text style={styles.sectionText}> 식사량(g) </Text>
            <TextInput style={deviceStyles.default}/>
          </View>
          <ConnectButton text={'입력하기'} onPress={this.save} />        
        </ScrollView>
      </View>
    )
  }
}
