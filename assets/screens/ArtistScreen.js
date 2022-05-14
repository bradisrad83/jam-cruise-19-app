import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const windowWidth = Dimensions.get('window').width;

MaterialIcons.loadFont();

const ArtistScreen = (props) => {
    const navigation = props.navigation;
    let artist = props.route.params.params.artist;
    return (
            <View style={styles.page}>
                <TouchableOpacity style={styles.navbar} onPress={() => navigation.goBack()}>
                    <MaterialIcons name={'chevron-left'} size={40} color={'#169eba'} onPress={() => navigation.goBack()}/>
                </TouchableOpacity>
                <ScrollView styles={styles.artist}>
                    <Image source={artist.imageUrl} style={styles.image}/>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 75,
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#169eba',
        fontWeight: 'bold',
    },
    navbar: {
        alignSelf: 'flex-start',
        marginTop: -50,
        marginBottom: 20,
        width: windowWidth,
        height: 40,
    },
    image: {
        margin: 'auto',
        width: windowWidth * .8,
        height:200,
        resizeMode: 'contain',
    },
    artist: {
        marginTop: 75,
    }
  });

  export default ArtistScreen;
