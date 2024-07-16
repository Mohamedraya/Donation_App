import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helpers';

const styles = StyleSheet.create({

    theMain: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        
      },  
    
      container: {
        flex: 1,
        marginHorizontal: horizontalScale(24),
        justifyContent: "center"
      },

      backBtn: {
        margin: horizontalScale(20)
      },
    
      welcomeTxt: {
        color: "#000",
        fontFamily: getFontFamily("Inter" , "600"),
        fontSize: scaleFontSize(26),
        marginBottom: verticalScale(15)
      },
    
      inputContainer: {
        marginBottom: verticalScale(20)
      },
    
      btnContainer: {
        marginTop: verticalScale(45)
      },

      error: {
        //fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        color: '#FF0000',
        marginBottom: verticalScale(24),
      },
      success: {
       // fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        color: '#28a745',
        marginBottom: verticalScale(24),
      },
});


export default styles;
  