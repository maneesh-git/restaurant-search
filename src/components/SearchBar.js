import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop : 15,
        backgroundColor : '#F0EEEE',
        height : 50,
        borderRadius : 10,
        marginHorizontal : 15,
        flexDirection : 'row',
        marginBottom : 10
    },
    inputStyle : {
        // borderColor : 'black',
        // borderWidth : 1,
        flex : 1,
        fontSize : 18 // default is 14
    },
    iconStyle : {
        fontSize : 35,
        alignSelf : 'center',
        marginHorizontal : 5
    }

});

export default SearchBar;


/* 
    TextInput always needs styling by default.

    flexDirection : row makes all siblings of parent to show as rows, 
    by default this is column.

    justify content has a default value of flex start so all the components are shoved to the left hand side of the screen.

*/
