import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businessses',
    headers : {
        Authorization : 'Bearer <API_Key> '
    }    
});