// @flow

// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, NetInfo } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { Metrics, Images } from '../Themes'
import styles from './Styles/DeviceInfoScreenStyle'

const HARDWARE_DATA = [
  {title: 'Device Manufacturer', info: DeviceInfo.getManufacturer()},
  {title: 'Device Name', info: DeviceInfo.getDeviceName()},
  {title: 'Device Model', info: DeviceInfo.getModel()},
  {title: 'Device Unique ID', info: DeviceInfo.getUniqueID()},
  {title: 'Device Locale', info: DeviceInfo.getDeviceLocale()},
  {title: 'Device Country', info: DeviceInfo.getDeviceCountry()},
  {title: 'User Agent', info: DeviceInfo.getUserAgent()},
]

export default class DeviceInfoScreen extends React.Component {
  state: {
    isConnected: boolean,
    connectionInfo: Object | null,
    connectionInfoHistory: Array<any>
  }

  constructor (props: Object) {
    super(props)

    this.state = {
      isConnected: false,
      connectionInfo: null,
      connectionInfoHistory: []
    }
  }

  componentDidMount () {
    NetInfo.isConnected.addEventListener('change', this.setConnected)
    NetInfo.isConnected.fetch().done(this.setConnected)
    NetInfo.addEventListener('change', this.setConnectionInfo)
    NetInfo.fetch().done(this.setConnectionInfo)
    NetInfo.addEventListener('change', this.updateConnectionInfoHistory)
  }

  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener('change', this.setConnected)
    NetInfo.removeEventListener('change', this.setConnectionInfo)
    NetInfo.removeEventListener('change', this.updateConnectionInfoHistory)
  }

  setConnected = (isConnected: boolean) => {
    this.setState({isConnected})
  }

  setConnectionInfo = (connectionInfo: Object) => {
    this.setState({connectionInfo})
  }

  updateConnectionInfoHistory = (connectionInfo: Object) => {
    const connectionInfoHistory = this.state.connectionInfoHistory.slice()
    connectionInfoHistory.push(connectionInfo)
    this.setState({connectionInfoHistory})
  }

  netInfo () {
    return ([
      {title: 'Connection', info: (this.state.isConnected ? 'Online' : 'Offline')},
      {title: 'Connection Info', info: this.state.connectionInfo},
      {title: 'Connection Info History', info: JSON.stringify(this.state.connectionInfoHistory)}
    ])
  }

  renderCard (cardTitle: string, rowData: Array<Object>) {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{cardTitle.toUpperCase()}</Text>
        {this.renderRows(rowData)}
      </View>
    )
  }

  renderRows (rowData: Array<Object>) {
    return rowData.map((cell) => {
      const {title, info} = cell
      return (
        <View key={title} style={styles.rowContainer}>
          <View style={styles.rowLabelContainer}>
            <Text style={styles.rowLabel}>{title}</Text>
          </View>
          <View style={styles.rowInfoContainer}>
            <Text style={styles.rowInfo}>{info}</Text>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText} >
              Dedicated to identifying specifics of the device.  All info useful for identifying outlying behaviour specific to a device.
            </Text>
          </View>
          {this.renderCard('Device Hardware', HARDWARE_DATA)}
          {this.renderCard('Net Info', this.netInfo())}
        </ScrollView>
      </View>
    )
  }
}
