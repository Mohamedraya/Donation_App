import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input/Input';
import styles from './styles';
import Button from '../Button/Button';
import {login} from '../../redux/reducers/User';
import {loginUser} from '../../api/User';
import { Routes } from '../../navigation/Routes';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const [error, setError] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (

    <SafeAreaView style={styles.theMain}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

        <Text style={styles.welcomeTxt}>Welcome Back,</Text>

        <View style={styles.inputContainer}>
          <Input keyboardType={'email-address'} label={'Email'} placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)} />
        </View>

        <View style={styles.inputContainer}>
          <Input label={'Password'} placeholder={'Enter your Password...'} secureTextEntry={true}
            onChangeText={value => setPassword(value)} />
        </View>

        {error.length > 0 && <Text style={styles.error}>{error}</Text>}

        <View style={styles.btnContainer}>
          <Button title='Login' onPress={async () => {

              let user = await loginUser(email, password);

              if (!user.status) {

                setError(user.error);
              } 
              else {
                setError('');
                dispatch(login(user.data));
                navigation.navigate(Routes.HomeScreen);
              }
            }} isDisabled={email.length < 5 || password.length < 8}/>
        </View>

        <Text style={styles.txt} onPress={() => {navigation.navigate(Routes.RegisterScreen)}}>Don't have an account?</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;