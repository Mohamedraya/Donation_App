import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Alert } from 'react-native';
import { CardForm, StripeProvider, useConfirmPayment } from '@stripe/stripe-react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import BackButton from '../backButton/BackButton';
import Button from '../Button/Button';
import axios from 'axios';
import styles from "./styles";



const Payment = () => {

    const route = useRoute();
    const { item } = route.params;

    const [isReady, setIsReady] = useState(false);
    const { confirmPayment, loading } = useConfirmPayment();
    const user = useSelector(state => state.user);

    const navigation = useNavigation();

    const fetchPaymentIntentClientSecret = async () => {

        const response = await axios.post("http://10.0.2.2:4242/create-payment-intent", {
            email: user.email,
            currency: 'usd',
            amount: item.price * 100
        });

        const { clientSecret } = await response.data;

        return clientSecret;
    }

    const handlePayment = async () => {

        const clientSecret = await fetchPaymentIntentClientSecret();

        const { error, paymentIntent } = await confirmPayment(clientSecret, {
            paymentMethodType: 'Card',
        });

        if (error) {

            Alert.alert('Error has occured with your payment', error.localizedMessage);
        }
        else if (paymentIntent) {
            Alert.alert('Successful', 'The payment was confirmed successfully!');
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView style={styles.theMain}>

            <View style={styles.container}>
                <BackButton onPress={() => { navigation.goBack() }} />
                <Text style={styles.header}>Making Payment</Text>
                <Text> You are about to donate {item.price}</Text>

                <View>
                    <StripeProvider publishableKey="pk_test_51P5vfCRq0iSR7SEgvlpnXSaw33NAt4JpkCUIyk2Km4zL94VckHMfO9qCQY3U96HnIjPlradIoYYD5t0SjIOI1dpy00Kx938xBo">
                        <CardForm style={styles.cardForm} onFormComplete={() => { setIsReady(true); }} />
                    </StripeProvider>
                </View>

                <View style={styles.btnContainer}>
                    <Button title={'Donate'} isDisabled={!isReady || loading} onPress={async () => await handlePayment()} />
                </View>

            </View>

        </SafeAreaView>
    );
}


export default Payment;