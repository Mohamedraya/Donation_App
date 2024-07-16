
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, Pressable, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

import { Routes } from '../../navigation/Routes';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button/Button';
import styles from './styles';
import Tab from '../Tab/Tab';
import Badge from '../Badge/Badge';
import Search from '../Search/Search';
import DonationItem from '../DonationItem/DonationItem';
import Header from '../Header/Header';
import DonationDetails from '../DonationDetails.js/DonationDetails';
import Input from '../Input/Input';



const Home = () => {

  /*
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const donations = useSelector(state => state.donations);
    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [donationItems, setDonationItems] = useState([]);
    const categoryPageSize = 4;
  
    useEffect(() => {
      const items = donations.items.filter(value =>
        value.categoryIds.includes(categories.selectedCategoryId),
      );
      setDonationItems(items);
    }, [categories.selectedCategoryId]);
  
    useEffect(() => {
      setIsLoadingCategories(true);
      setCategoryList(
        pagination(categories.categories, categoryPage, categoryPageSize),
      );
      setCategoryPage(prev => prev + 1);
      setIsLoadingCategories(false);
    }, []);
  
    const pagination = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      if (startIndex >= items.length) {
        return [];
      }
      return items.slice(startIndex, endIndex);
    };*/

  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);

  const [donationItems, setDonationItems] = useState([]);
  console.log(user);
  const dispatch = useDispatch();

  const [categoryCurrentPage, setCategoryCurrentPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;



  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(categories.categories, categoryCurrentPage, categoryPageSize));
    setCategoryCurrentPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);


  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);


  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={styles.theMain}>

      {DonationItem.length > 0 && (
        <View style={styles.DonationsContainer}>
          <FlatList data={donationItems} keyExtractor={(item) => item.donationItemId} showsVerticalScrollIndicator={false}
            numColumns={2} contentContainerStyle={{ gap: 10 }} columnWrapperStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <DonationItem uri={item.image} donationTitle={item.name} price={parseFloat(item.price)} item={item}
                badgeTitle={categories.categories.filter(val => val.categoryId === categories.selectedCategoryId)[0].name} />)}


            ListHeaderComponent={<>
              <Header title={user.displayName + ' 👋'} />

              <Search />

              <Pressable>
                <Image source={require("../../assets/images/highlighted_image.png")} style={styles.highlightedImage} />
              </Pressable>

              <Text style={styles.categoryHeader}>Select Category</Text>

              <View style={styles.categories}>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.categoryId}
                  data={categoryList} renderItem={({ item }) => (
                    <View style={styles.categoryItem}>

                      <Tab title={item.name} isInactive={item.categoryId !== categories.selectedCategoryId}
                        onPress={() => dispatch(updateSelectedCategoryId(item.categoryId))} />
                    </View>
                  )}

                  onEndReachedThreshold={0.5} onEndReached={() => {

                    if (isLoadingCategories) {
                      return;
                    }

                    setIsLoadingCategories(true);
                    let newData = pagination(categories.categories, categoryCurrentPage, categoryPageSize);
                    if (newData.length > 0) {
                      setCategoryList(prevState => [...prevState, ...newData]);
                      setCategoryCurrentPage(prevState => prevState + 1);
                    }
                    setIsLoadingCategories(false);
                  }}
                />
              </View>
            </>}
          />
        </View>
      )}

    </SafeAreaView>
  );
};
// Exporting the Home component to be used in other parts of the app
export default Home;