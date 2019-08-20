import axios from 'axios';
const api = axios.create({ baseURL: 'https://rockeseat-node.herokuapp.com/api'});
export default api;