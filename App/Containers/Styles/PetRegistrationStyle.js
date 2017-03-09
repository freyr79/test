// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cardTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginVertical: Metrics.baseMargin,
    color: Colors.black
  },
  cardContainer: {
    backgroundColor: Colors.snow,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: Colors.panther,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowRadius: 2,
    paddingBottom: Metrics.baseMargin,
    margin: Metrics.baseMargin
  },
  rowContainer: {
    flexDirection: 'row',
    borderColor: Colors.windowTint,
    borderWidth: 0.5,
    borderRadius: 2,
    marginHorizontal: Metrics.baseMargin
  },
  rowLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.snow
  },
  rowLabel: {
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },
  rowInfoContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: Colors.snow
  },
  rowInfo: {
    fontSize: Fonts.size.regular,
    margin: Metrics.baseMargin
  },
  default: {
    height: 36,
    borderWidth: 0.7,
    borderColor: Colors.black,
    flex: 1,
    fontSize: 16,
    padding: 4,
    marginVertical: Metrics.baseMargin,
    margin: 30
  },
})
