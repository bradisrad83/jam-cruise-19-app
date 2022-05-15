import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const windowWidth = Dimensions.get('window').width;

MaterialIcons.loadFont();

const ArtistScreen = (props) => {
    const navigation = props.navigation;
    let artist = props.route.params.params.artist;
    const renderSchedule = ({schedule}) => {
        <View stlyle={styles.timeSlot}>
            <Text style={styles.timeSlotText}>Date</Text>
            <Text style={styles.timeSlotText}>Time</Text>
            <Text style={styles.timeSlotText}>Stage</Text>
            <TouchableOpacity style={styles.timeSlotButton}>
                <Text>Add Reminder</Text>
            </TouchableOpacity>
        </View>
    };
    return (
            <View style={styles.page}>
                <TouchableOpacity style={styles.navbar} onPress={() => navigation.goBack()}>
                    <MaterialIcons name={'chevron-left'} size={40} color={'#169eba'} onPress={() => navigation.goBack()}/>
                </TouchableOpacity>
                <ScrollView styles={styles.artist}>
                    <Image source={artist.imageUrl} style={styles.image}/>
                    <Text style={styles.text}>{artist.name}</Text>

                    <Text style={styles.paragraph}>{artist.about}</Text>
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
    paragraph: {
        fontSize: 16,
        marginTop: 20,
        color: '#169eba',
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
        width: windowWidth,
        height:210,
        resizeMode: 'cover',
        borderRadius: 100/2,
        borderColor: '#169eba',
        borderWidth: 2,
    },
    artist: {
        marginTop: 75,
    },
    timeSlot: {
        flexDirection: 'row',
        justfityContent: 'flex-start',
    },
    timeSlotText: {
        marginLeft: 6,
        color: '#169eba',
        fontSize: 12,
        fontWeight: 'bold',
    },
    timeSlotButton: {
        backgroundColor: '#169eba',
        color: '#000000',
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 14,
    }
  });

  export default ArtistScreen;
