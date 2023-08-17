import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter a name:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newNameValue) => setName(newNameValue)}
            />
            <Text>Enter a password with more than five characters:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newPasswordValue) => setPassword(newPasswordValue)}
            />
            <Text>Name: {name}</Text>
            {(password.length > 5)
                ? <Text style={{ color: 'green' }}>Password satisfies the length condition</Text>
                : <Text style={{ color: 'red' }}>Password does not satisfy the length condition</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
