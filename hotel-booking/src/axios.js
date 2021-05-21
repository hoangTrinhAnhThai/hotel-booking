import axios from 'axios'

axios.defaults.baseURL ='https://hotels-booking-server.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token'); 