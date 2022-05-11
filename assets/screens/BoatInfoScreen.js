import React from 'react';
import {ScrollView, Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const image = require('../images/divina.jpg');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BoatInfoScreen = () => {
    return (
        <ScrollView>
            <View style={styles.comments}>
                <Text style={styles.text}>$ = not free</Text>
                <Text style={styles.text}>The 7th deck walkway is great to get from the front to back quickly</Text>
                <Text style={styles.text}>Elevator up, stairs down</Text>
                <Text style={styles.text}>Sweets area on 6 is where you'll find gelato</Text>
            </View>
            <ScrollView horizontal style={styles.page}>
                <Image source={image} />
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'black',
    },
    comments: {
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: 'black',
        padding: 4,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#169eba',
        marginTop: 8,
        marginBottom: 8,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
  });

  export default BoatInfoScreen;