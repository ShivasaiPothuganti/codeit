import axios from 'axios';

const axios_instance = axios.create({
    baseURL:'https://emkc.org/api/v2/piston'
})

export default axios_instance;