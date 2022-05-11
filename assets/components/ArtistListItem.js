import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialIcons.loadFont();

const windowWidth = Dimensions.get('window').width;

const ArtistListItem = (artist) => {
    let source = artist.artist.imageUrl;
    return (
        <View style={styles.list}>
            <Image source={source} style={styles.image}/>
            <Text style={styles.text}>{artist.artist.name}</Text>
            <MaterialIcons style={styles.favorite} name={'star-outline'} size={25} color={'#169eba'} />
        </View>
    );
}

const styles = StyleSheet.create({
    list: { 
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth,
    },
    text: {
        fontSize: 15,
        color: '#169eba',
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        width: windowWidth*.65
    },
    image: {
        borderRadius: 10,
        height: 50,
        width: windowWidth*.20,
        resizeMode: 'contain',
        borderColor: '#169eba',
        borderWidth: 2, 
    },
    favorite: {
        width: windowWidth*.15
    }
  });

export default ArtistListItem;