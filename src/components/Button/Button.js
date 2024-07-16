import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const Button = ({title,onPress,isDisabled}) => {

  return (
    <TouchableOpacity disabled={isDisabled} style={[styles.button, isDisabled && styles.disabled]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};



Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;