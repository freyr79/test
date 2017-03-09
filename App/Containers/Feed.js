// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/MainStyle'

export default class Feed extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.white_background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.pet} style={styles.logo} />
          </View>

          <View style={styles.mySection} >
            <Text style={styles.mainText} >
              Smart pet healthcare
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.fetchData}>
            식사량 데이터 가져오기
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.inputData}>
            식사량 직접 입력하기
          </RoundedButton>


        </ScrollView>
      </View>
    )
  }
}
