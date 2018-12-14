import axios from 'axios';

const LocalHost = 'http://140.211.16.25';

const instance = axios.create({
    baseURL: LocalHost + '/api'
});

export default instance;