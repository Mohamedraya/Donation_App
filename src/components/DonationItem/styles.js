import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale,scaleFontSize} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helpers';


const styles = StyleSheet.create({

  image: {
    width: horizontalScale(155),
    height: verticalScale(140),
    borderRadius: horizontalScale(13),
    resizeMode:'cover'
  },

  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },

  donationInformation: {
    marginTop: verticalScale(16),
  },

  title: {
    color: "#000",
    fontSize: scaleFontSize(16)
  },

  title3: {
    fontFamily: getFontFamily("Inter" , "600"),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#0A043C',
    marginTop: verticalScale(5),
  }

});

export default styles;