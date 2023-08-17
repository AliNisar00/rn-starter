import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreenUseState = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text>Current count: {counter}</Text>
            <Button title='Increase count' onPress={() => {setCounter(counter + 1)}} />
            <Button title='Decrease count' onPress={() => {setCounter(counter - 1)}} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreenUseState;
