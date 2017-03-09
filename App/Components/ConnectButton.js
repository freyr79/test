// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Example
ExamplesRegistry.add('Rounded Button', () =>
  <ConnectButton
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)

type RoundedButtonProps = {
  onPress: () => void,
  rx: string,
  text?: string,
  children?: string,
  navigator?: Object
}

export default class ConnectButton extends React.Component {
  props: RoundedButtonProps

  getText () {
      
    var buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
