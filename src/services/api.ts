import axios from 'axios'

export const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/'
});

export const picsumApi = axios.create({
  baseURL: 'https://picsum.photos/'
})
