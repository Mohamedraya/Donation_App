import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { resetToInitialState } from '../../redux/reducers/User';
import { logOut } from '../../api/User';
import PropTypes from "prop-types";
import styles from "./styles";




const Header = ({ title }) => {

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.helloTxt}>Hello,</Text>
        <Text style={styles.title1}>{title}</Text>
      </View>

      <View>
        <Image source={{ uri: user.profileImage }} style={styles.profileImg} />

        <Text style={styles.outTxt} onPress={async () => {
          dispatch(resetToInitialState());
          await logOut();
        }}>Log Out</Text>

      </View>

    </View>
  );
}

Header.propTypes = {

  name: PropTypes.string,
}


export default Header;