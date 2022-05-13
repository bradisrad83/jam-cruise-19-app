import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.text}>Favorites Screen</Text>
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

  export default FavoritesScreen;