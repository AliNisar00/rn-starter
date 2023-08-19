import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    /*return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
    */
   return (
        <View style={styles.viewParentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
   );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start', // part of Flex Box
        //height: 200,
        //flexDirection: 'row', // part of Flex Box
        //justifyContent: 'center' // part of Flex Box
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    viewParentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 100
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;
