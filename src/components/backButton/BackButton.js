import React from 'react';

import style from './style';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;