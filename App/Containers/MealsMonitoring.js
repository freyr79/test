import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'
import styles from './Styles/DeviceConnectionStyle'

class MealsMonitoring extends Component {
  render() {
    let data = [
      [{
        "v": 0,
        "name": "20170202"
      }, {
        "v": 380,
        "name": "20170203"
      },{
        "v": 460,
        "name": "20170204"
      },{
        "v": 430,
        "name": "20170205"
      },{
        "v": 420,
        "name": "20170206"
      }]
    ]

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mealsText} >최근 5일간 식사량</Text>
        <View style={styles.centered}>
          <Bar data={data} options={options} accessorKey='v'/>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}> 권장량 대비 식사량 : 82% </Text>
        </View>
      </View>
    )
  }
}

export default MealsMonitoring;