import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize,verticalScale} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helpers';


const styles = StyleSheet.create({

  theMain: {
     flex: 1,
     backgroundColor: "#FFFFFF",
     
  },

  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
    resizeMode: "contain"
  },

  categoryHeader: {
    color: "#000",
    fontFamily: getFontFamily("Inter" , "600"),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },

  categories: {
    marginTop: verticalScale(10),
    
  },

  categoryItem: {
    marginRight: horizontalScale(10),
  },
  
  DonationsContainer: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(15)
  },

  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default styles;