import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';

const ArtistScreen = (artist) => {
    return (
        <ScrollView style={styles.page}>
            <Text style={styles.text}>Arist Screen</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#169eba',
        fontWeight: 'bold',
    }
  });

  export default ArtistScreen;