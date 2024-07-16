import {StyleSheet} from 'react-native';
import {horizontalScale,scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helpers';


const styles = StyleSheet.create({
 
  theMain: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
    backgroundColor: "#FFFFFF"
  },

  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },

  badge: {
    marginBottom: verticalScale(16),
  },

  nameTxt: {
    color: "#000",
    fontFamily: getFontFamily("Inter" , "600"),
    fontSize: scaleFontSize(24)
  },

  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: getFontFamily("Inter" , "400"),
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(10),
  },

  button: {
    margin: horizontalScale(20),

  },
});

export default styles;