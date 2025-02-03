import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch('https://70e321546e7147e3909b8c1bc273f1d5.api.mockbin.io/')
            .then((response) => response.json())
            .then((myJson) => {

                    setMyData(myJson);


            });
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listStyle}>
                <Text>{item.name}</Text>
                <Button
                    title="View Details"
                    onPress={() => navigation.navigate("Details", { user: item })}
                />
            </View>
        );
    };


    return (
    <View>
      <StatusBar/>
	  <Button title='Register' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
