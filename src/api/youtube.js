import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResult : 5,
        key: 'AIzaSyD9usn3SsZ6loZrlw619om0AGx0mALOGSY',
    }
});