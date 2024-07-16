import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';



const Input = ({label,placeholder, secureTextEntry, keyboardType, onChangeText}) => {


    const [value, setValue] = useState('');


    return (
        <View>
            <Text style={styles.label}>{label}</Text>

            <TextInput placeholder={placeholder} style={styles.input} value={value} onChangeText={val => {
                    setValue(val);
                    onChangeText(val);
                }}
                secureTextEntry={secureTextEntry ? secureTextEntry : null}
                keyboardType={keyboardType ? keyboardType : "default"}
                
            />
        </View>
    );
};


Input.propTypes = {
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
  };

export default Input;