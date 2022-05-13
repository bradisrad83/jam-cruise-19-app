import React, { useEffect, useState } from "react";
import {Image, View, Text, StyleSheet, Dimensions} from 'react-native';

const image = require('../images/jc19.jpeg');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const calculateTimeLeft = () => {
    const difference = +new Date('02/06/2023 03:00:00PM') - +new Date();
    let timeLeft = {
        days: 0, 
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
}

const HomeScreen = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    return (
        <View style={styles.page}>
            <Image style={styles.image} source={image} />
            <View style={styles.time}>
                <Text style={styles.text}>{timeLeft.days+' Days'}</Text>
                <Text style={styles.text}>{timeLeft.hours+' Hours'}</Text>
                <Text style={styles.text}>{timeLeft.minutes+' Minutes'}</Text>
                <Text style={styles.text}>{timeLeft.seconds+' Seconds'}</Text>
                <Text style={styles.text}>UNTIL WE SET SAIL!!!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        height: windowHeight ,
        width: windowWidth,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    image: {
        height: 250,
        width: windowWidth * .85
    },
    time: {
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#169eba',
        fontWeight: 'bold',
    }
  });

  export default HomeScreen;