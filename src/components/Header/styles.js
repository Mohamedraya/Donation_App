import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from "../../assets/styles/scaling";
import { getFontFamily } from '../../assets/fonts/helpers';

const styles = StyleSheet.create({

  mainContainer: {
    marginTop: verticalScale(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  helloTxt: {
    fontSize: scaleFontSize(18),
  },

  title1: {
    color: "#000",
    fontFamily: getFontFamily("Inter" , "600"),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    
  },
  title2: {
    fontFamily: getFontFamily("Inter" , "600"),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    
  },
  title3: {
    fontFamily: getFontFamily("Inter" , "600"),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    
  },

  profileImg: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: horizontalScale(50)
  },

  outTxt: {
    color: "#156CF7",
    fontFamily: getFontFamily("Inter" , "500"),
    fontSize: scaleFontSize(15)
  }
});

export default styles;