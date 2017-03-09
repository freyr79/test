// @flow

import React from 'react'
import { ActivityIndicator,
  ScrollView,
  Picker,
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
import deviceStyles from './Styles/PetRegistrationStyle'
const pickerStyle = require('StyleSheet');

const Item = Picker.Item;

export default class PetRegistration extends React.Component {
  state = {
    selected1: 'key1',
    selected2: 'key1',
    selected3: 'key1',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };
  save = () => {
      window.alert('입력되었습니다.')
      return ;
  }
    changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DIALOG
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.white_background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.pet} style={styles.logo} />
          </View>
          <View style={styles.centered}>
            <Text style={styles.sectionText}> 이름 </Text>
            <TextInput style={deviceStyles.default}/>

            <Picker
                style={pickerStyle.picker}
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this, 'selected1')}
                mode='dropdown' >
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
          </View>
          <ConnectButton text={'등록하기'} onPress={this.save} />
        </ScrollView>
      </View>
    )
  }
}
