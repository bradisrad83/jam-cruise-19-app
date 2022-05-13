import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const filterSchedule = (date) => {
    console.log(date);
}

const ScheduleScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.buttonRow}> 
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/6')}>
                    <Text>2 / 6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/7')}>
                    <Text>2 / 7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/8')}>
                    <Text>2 / 8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/9')}>
                    <Text>2 / 9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/10')}>
                    <Text>2 / 10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/11')}>
                    <Text>2 / 11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filterSchedule('2/12')}>
                    <Text>2 / 12</Text>
                </TouchableOpacity>                                                                                                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 15,
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    buttonRow:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#169eba",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        borderRadius: 12,
        marginBottom: 10
    }
  });

  export default ScheduleScreen;