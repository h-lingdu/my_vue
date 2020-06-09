import axios from 'axios'

export  function getMovieData(params){
    return axios.get('/top250',{params})
}