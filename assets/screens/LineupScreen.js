import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Artists from '../Artists';
import ArtistListItem from '../components/ArtistListItem';

const DATA = Artists.artists;

const LineupScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList 
                data={DATA}
                renderItem={({item}) =>
                    <ArtistListItem artist={item} />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
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

  export default LineupScreen;