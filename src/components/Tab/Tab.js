import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {horizontalScale} from '../../assets/styles/scaling';


const Tab = ({title,isInactive,onPress,tabId}) => {

  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 33;

  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable  style={[styles.tab, isInactive && styles.inactiveTab, tabWidth]} 
               onPress={onPress}>

      <Text onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}       
        style={[styles.title, isInactive && styles.inactiveTitle]}>

        {title}
      </Text>
    </Pressable>
  );
};




Tab.propTypes = {
  
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;