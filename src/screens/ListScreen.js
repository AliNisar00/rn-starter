import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', key: '1', age: 20 },
        { name: 'Friend #2', key: '2', age: 45 },
        { name: 'Friend #3', key: '3', age: 32 },
        { name: 'Friend #4', key: '4', age: 27 },
        { name: 'Friend #5', key: '5', age: 26 },
        { name: 'Friend #6', key: '6', age: 55 },
        { name: 'Friend #7', key: '7', age: 42 },
        { name: 'Friend #8', key: '8', age: 54 },
        { name: 'Friend #9', key: '9', age: 32 },
        { name: 'Friend #10', key: '10', age: 51 }
    ];
    
    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
