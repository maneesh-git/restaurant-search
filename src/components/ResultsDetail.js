import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.container} >
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginLeft : 15,
    },
    imageStyle : {
        width : 250,
        height : 120,
        borderRadius : 5,
        marginBottom : 5
    },
    nameStyle : {
        fontWeight : 'bold',    
    }
});

export default ResultsDetail;

/*

Image element by default does not show render anything 
and we have to specify height and weight to it show the image shows up

Initial styles

const styles = StyleSheet.create({
    imageStyle : {
        width : 250,
        height : 120,
        borederRadius : 5
    },
    nameStyle : {
        fontWeight : 'bold',    
    }
});

*/