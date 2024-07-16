import React from 'react';
import {useSelector} from 'react-redux';

import {Image, SafeAreaView, ScrollView, View, Text} from 'react-native';
import BackButton from '../backButton/BackButton';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import Button from '../Button/Button';
import { useNavigation,useRoute } from '@react-navigation/native';

import styles from './styles';
import { Routes } from '../../navigation/Routes';



const DonationDetails = () => {

  const route = useRoute();
  const {item} = route.params;

  const categories = useSelector(state => state.categories);

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.theMain}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <BackButton onPress={() => {navigation.goBack()}} />
          
        <Image source={{uri: item.image}} style={styles.image}/>

        <View style={styles.badge}>
          <Badge title={categories.categories.filter(item => item.categoryId === categories.selectedCategoryId)[0].name} />
        </View>

        <Text style={styles.nameTxt}>{item.name}</Text>

        <Text style={styles.description}>{item.description}</Text>

      </ScrollView>

      <View style={styles.button}>
        <Button title={'Donate'} onPress={() => {navigation.navigate(Routes.PaymentScreen , {item})}}/>
      </View>

    </SafeAreaView>
  );
};
export default DonationDetails;