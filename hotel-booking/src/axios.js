import axios from 'axios'

axios.defaults.baseURL ='https://hotels-booking-server.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:8081/'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')