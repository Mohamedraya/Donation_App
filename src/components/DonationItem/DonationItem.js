import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import styles from './styles';


const DonationItem = ({uri,badgeTitle,donationTitle,price,item}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => {navigation.navigate(Routes.DetailsScreen , {item})}}>
            <View>
                <View>
                    <View style={styles.badge}>
                        <Badge title={badgeTitle} />
                    </View>
                    <Image source={{ uri:uri }} style={styles.image}/>
                </View>

                    <Text style={styles.title}>{donationTitle}</Text>

                    <Text style={[styles.title3 , {color: '#156CF7'}]}>{price}</Text>                                               
            </View>
        </TouchableOpacity>
    );
};
DonationItem.propTypes = {
    uri: PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default DonationItem;