import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    //state === {count: number}
    //action === {type: 'increase_count' || 'decrease_count', payload === 1 || -1}
    switch (action.type) {
        case 'increase_count':
            return { ...state, count: state.count + action.payload };
        case 'decrease_count':
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
};

const CounterScreenUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <View>
            <Text>Current count: {state.count}</Text>
            <Button title='Increase count' onPress={() => dispatch({ type: 'increase_count', payload: 1 })} />
            <Button title='Decrease count' onPress={() => dispatch({ type: 'decrease_count', payload: -1 })} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default CounterScreenUseReducer;
