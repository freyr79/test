// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/MainStyle'

export default class Main extends React.Component {
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

          <RoundedButton onPress={NavigationActions.feed}>
            Feed 
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.mealsMonitoring}>
            Meals Monitoring
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.deviceConnection}>
            Device Connection
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.petRegistration}>
            Pet Registration
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Copyright@SmartCreator, 2017</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
