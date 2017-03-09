// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import ConnectButton from '../Components/ConnectButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {

  // <View style={styles.section} >
  //           <Text style={styles.sectionText} >
  //             Default screens for development, debugging, and alpha testing
  //             are available below.
  //           </Text>
  //         </View>
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.smart_bowl} style={styles.logo} />
          </View>

          <View style={styles.centered}>
            <Text style={styles.diviceText}>Smart Bowl</Text>
          </View>

          <ConnectButton>
            Connect
          </ConnectButton>

          {/* <RoundedButton onPress={NavigationActions.theme}>
            Theme Screen
          </RoundedButton>
*/}
          

        </ScrollView>
      </View>
    )
  }
}
