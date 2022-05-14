import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

MaterialIcons.loadFont();

const windowWidth = Dimensions.get('window').width;
function addOrRemoveFavorites(id) {
    console.log('icon has been pressed');
    console.log(id);
}
const ArtistListItem = (props) => {
    const navigation = useNavigation(); 
    let artist = props.artist;
    let source = artist.imageUrl;
    return (
        <View style={artist.id % 2 ? styles.listOdd : styles.listEven}>
            <TouchableWithoutFeedback>
                <Image source={source} style={styles.image} />
            </TouchableWithoutFeedback>
            {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Artist', {params: {screen: 'ArtistScreen', params: {artist}}})}> */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Artist', {params: {artist}})}>
                <Text style={styles.text}>{artist.name}</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => addOrRemoveFavorites(artist.id)}>
                <MaterialIcons style={styles.favorite} name={'star-outline'} size={25} color={'#169eba'} />
            </TouchableWithoutFeedback>
        </View>
    );
}


const styles = StyleSheet.create({
    listEven: { 
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth,
        backgroundColor: '#00333f',
        borderRadius: 20    ,
    },
    listOdd: { 
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth,
        backgroundColor: '#000',
        borderRadius: 20,
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