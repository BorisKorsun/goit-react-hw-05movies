import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '79fb62b7e77dc5ee41dd0c1332d74198';

class API {
  constructor() {
    this.service = axios.create({
      baseURL: BASE_URL,
      params: { api_key: API_KEY,  },
    });
  }

  getTrendingMovies() {
    return this.service.get('trending/all/day')
  } 
}

export default API;
