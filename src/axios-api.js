import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://riderjensen.com/'
})

export default instance;