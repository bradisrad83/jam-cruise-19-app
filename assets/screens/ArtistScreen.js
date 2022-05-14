import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';

MaterialIcons.loadFont();

const ArtistScreen = (props) => {
    const navigation = props.navigation;
    let artist = props.route.params.params.artist;
    return (
        <ScrollView style={styles.page}>
            <TouchableOpacity style={styles.navbar} onPress={() => navigation.goBack()}>
                <MaterialIcons name={'chevron-left'} size={40} color={'#169eba'} />
            </TouchableOpacity>
            <Text style={styles.text} onPress={() => navigation.goBack()}>{artist.name}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#169eba',
        fontWeight: 'bold',
    },
    navbar: {
        position: 'static',
        top: -20,
        left: 10,
    }
  });

  export default ArtistScreen;
