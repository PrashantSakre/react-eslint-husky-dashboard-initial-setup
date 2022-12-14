import axios from 'axios'

// configure an axios instance
const instance = axios.create({
  // eslint-disable-next-line no-use-before-define
  baseURL: process.env.REACT_APP_API, // eslint-disable-line no-use-before-define
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error?.response?.status === 401) {
      localStorage.clear()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default instance
