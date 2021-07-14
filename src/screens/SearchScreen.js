import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [ term, setTerm ] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <View style={{ flex : 1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage }</Text> : null }

            <Text> we have found {term }'s results.</Text>
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResultsByPrice('$')} 
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList 
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')} 
                />
            </ScrollView>
        </View>
    ) 
}

const styles = StyleSheet.create({});

export default SearchScreen;


/*


<SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />


ScrollView 
essentially works identically to a view element.
However, if the scroll view detects that it has too much content inside of it
to fit all on the screen at one time,
it will automatically enable scrolling.

but rather not completely on android.

Anytime we show a view element and put some amount of content inside it,
React native is going to very happily throw in as much content in there
as it possibly can.

In this case the view element is spanning to the bottom of the screen,
actually even surpassing it.


Anytime it feels we have some content thats being cut off or 
extending beyond the scrren length,
very frequently we can add {flex:1} the most parent component




Navigating from SearchScreen to another screen 

get navigation from the props
pass navigation as props to ResultsList

receive the naviagtion props in ResultsList

Using the <TouachableOpacity>'s onPress function to navigate o another screen.
onPress={() => navigation.navigate('ResultsShow')}





Another method to navigate :::
For now we are recieving the navigation prop in the SearchScreen and
passing it down to each of the individual ResultsList 
and using the navigation in ResultsLlist screen.

const SearchScreen = ({ navigation }) => {}

<ResultsList 
    title="Bit Pricier"
    results={filterResultsByPrice('$$')}
    navigation={navigation}
/>

1. Remove all the references of the navigation from the SearchScreen component.
2. Inject navigation into the ResultsList directly from React Navigation Stack Navigator

Inside ResultsDetail
import { withNavigation } from 'react-naviagtion'

This will return a special version of our component 
that has access to the navigation prop that it needs.

In the export default statement.
we will wrap the export with withNavigation
export default withNavigation(ResultsList);

So now we are no longer exporting ResultsList directly,
instead we are exporting a special version of ResultsList that has 
extra code/funtionality tied to it, 
that gives the ResultsList access to navigation. 

Now Resultslist will have access to the naviagtion prop 
and we did not have pass it down from a parent component.


*/