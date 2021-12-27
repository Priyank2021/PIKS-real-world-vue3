import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Priyank2021/API-MOCK-DB/events',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient
      .get('/events?_limit=' + perPage + '&_page=' + page)
      .then(sleeper(1000))
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}

function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}
