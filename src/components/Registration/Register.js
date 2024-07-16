import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input/Input';
import Button from '../Button/Button';
import BackButton from '../backButton/BackButton';
import { Routes } from '../../navigation/Routes';
import { createUser } from '../../api/User';
import styles from "./styles";



const Login = () => {


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.theMain}>

            <View style={styles.backBtn}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

                <Text style={styles.welcomeTxt}>Hello,</Text>

                <View style={styles.inputContainer}>
                    <Input label={'Full Name'} placeholder={'Enter your Name'}
                        onChangeText={value => setFullName(value)} />
                </View>

                <View style={styles.inputContainer}>
                    <Input keyboardType={'email-address'} label={'Email'} placeholder={'Enter your email...'}
                        onChangeText={value => setEmail(value)} />
                </View>

                <View style={styles.inputContainer}>
                    <Input label={'Password'} placeholder={'Enter your Password...'} secureTextEntry={true}
                        onChangeText={value => setPassword(value)} />
                </View>

                {error.length > 0 && <Text style={styles.error}>{error}</Text>}
                {success.length > 0 && <Text style={styles.success}>{success}</Text>}

                <View style={styles.btnContainer}>
                    <Button title='Register' onPress={async () => {
                        let user = await createUser(fullName, email, password);
                        if (user.error) {
                            setError(user.error);
                        } 
                        else {
                            setError('');
                            setSuccess('You have successfully registered');
                            setTimeout(() => navigation.goBack(), 3000);
                        }
                    }}
                        isDisabled={fullName.length <= 2 || email.length <= 5 || password.length < 8} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;