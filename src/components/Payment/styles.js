import { StyleSheet } from "react-native";
import { horizontalScale,verticalScale } from "../../assets/styles/scaling";



const styles = StyleSheet.create({

    theMain: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        
    },

    container: {
        margin: horizontalScale(24)
    },

    header: {
        margin: horizontalScale(24)
    },

    cardForm: {
        height: verticalScale(200),
        marginTop: verticalScale(12),
      },

      btnContainer: {
        marginTop: verticalScale(100)
      }
});



export default styles;