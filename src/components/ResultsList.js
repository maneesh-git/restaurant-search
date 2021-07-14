import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length) {
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id} )}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginBottom : 10
    },
    titleStyle : {
        fontWeight : 'bold',
        fontSize : 18,
        marginLeft : 15,
        marginBottom : 5
    }
});

export default withNavigation(ResultsList);



/*
    horizontal since the flatlist by defaults results in a vertical list

    
    
    
    
    
    
    Passing props to another component using navigate
    We can pass in an object as a second parameter to naviagetion.navigate funtion.

    onPress={() => navigation.navigate('ResultsShow', { id: item.id} )}

    We can send anything in the scond object.
    Since the api requires only the id of the business we just pass that for now.

    Within the ResultsShowScreen Component we can receive it from navigation.
    first get naigation prop from props.
    Extract the id from it using getParam call like the following.
    We extract id here as that is we arre sending from the ResultsList component.

    const ResultsShowScreen = ({ navigation }) => {}

    const id = navigation.getParam('id');



*/