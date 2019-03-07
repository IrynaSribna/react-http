import axios from 'axios';


//instance will override the default settings set in the ondex.js file
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//instance.interceptors.request....

export default instance;