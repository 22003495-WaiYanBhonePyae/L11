import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = ({ route }) => {
    const { user } = route.params; // Get user data from navigation

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Details</Text>
            <Text><Text style={styles.label}>Name:</Text> {user.name}</Text>
            <Text><Text style={styles.label}>Email:</Text> {user.email}</Text>
            <Text><Text style={styles.label}>Phone:</Text> {user.phoneNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
    },
});

export default Details;
