import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    

    const getResult = (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    
    useEffect(() => {
        getResult(id);
    },[]);

    if(!result) {
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={ ({ item }) => {
                    return <Image source={{ uri : item }} 
                                style = {styles.imageStyle}
                            />
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        height : 200,
        width : 300
    }
});

export default ResultsShowScreen;


/*  
    useEffect can be run exactly one time 
    provided we pass an empty array as the second argument.

*/