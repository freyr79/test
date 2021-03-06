// @flow

import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      marginTop: Metrics.navBarHeight,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin
    },
    mySection: {
      margin: Metrics.section,
      marginTop:-20,
      padding: Metrics.baseMargin,
      borderTopColor: Colors.black,
      borderTopWidth: 1,
      borderBottomColor: Colors.black,
      borderBottomWidth: 1
    },
    deviceInfoSection: {
      margin: Metrics.section,
      borderBottomColor: Colors.black,
      borderBottomWidth: 1
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
      borderTopColor: Colors.black,
      borderTopWidth: 0.5,
      borderBottomColor: Colors.black,
      borderBottomWidth: 1
    },
    mealsText: {
      ...Fonts.style.h5,
      color: Colors.orange,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    mainText: {
      color: Colors.black,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    deviceInfoText: {
      fontSize:11,
      color: Colors.black,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    sectionText: {
      color: Colors.black,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    subtitle: {
      color: Colors.Black,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    }
  },
  darkLabelContainer: {
    backgroundColor: Colors.cloud,
    padding: Metrics.smallMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
