import { StyleSheet } from 'react-native';
import {
    horizontalScale,
    scaleFontSize,
    verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helpers';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2979F2',
        height: verticalScale(55),
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: horizontalScale(50),
    },

    disabled: {
        opacity: 0.5,
    },

    title: {
        fontFamily: getFontFamily("Inter" , "600"),
        fontSize: scaleFontSize(24),     
        color: '#FFFFFF',        
    },
});

export default styles;