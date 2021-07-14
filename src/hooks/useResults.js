import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("Search api after submit :::: ",searchTerm);
        
        try{
            const response =  await yelp.get('/search',{
                params : {
                    limit: 50,
                    term: searchTerm,
                    location : 'san jose'
                }
            }); 
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
        
    }

    // Call searchApi when component is first rendered.

    // searchApi('pasta');
    // this is BAD code.

    // useEffect allows us to run a snippet of code just one time
    // when our component is first rendered to the screen.

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [ searchApi, results, errorMessage];

};

// we return only the things we need in the SearchScreen component
// and whose values are used in rendereing items or JSX.