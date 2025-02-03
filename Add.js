import React, { useState } from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert, StyleSheet } from 'react-native';

const Add = ({ navigation, route }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar />

            <Text style={styles.header}>Registration</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                placeholder="Enter your email"
            />

            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPhoneNumber(text)}
                keyboardType="numeric"
                placeholder="Enter your phone number"
            />

            <View style={styles.buttonContainer}>
                <Button
                    title='Sign Up'
                    color="blue"
                    onPress={() => {
                        let mydata = JSON.parse(route.params.datastr);
                        let item = {
                            name: name,
                            email: email,
                            phoneNumber: phoneNumber
                        };

                        mydata.push(item);

                        fetch('https://70e321546e7147e3909b8c1bc273f1d5.api.mockbin.io/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Authorcode'
                            },
                            body: JSON.stringify(mydata)
                        })
                            .then((response) => {
                                navigation.navigate('Home');
                            });
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 10,
        borderRadius: 5,
        overflow: 'hidden', // Ensures button corners follow styling
    },
});

export default Add;
