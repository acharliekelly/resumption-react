import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMyLayouts = user => {
  return axios({
    url: apiUrl + '/layouts',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getLayout = (user, layoutId) => {
  return axios({
    url: apiUrl + '/layouts/' + layoutId,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const createLayout = (user, data) => {
  return axios({
    url: apiUrl + '/layouts',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data
  })
}

export const updateLayout = (user, data) => {
  return axios({
    url: apiUrl + '/layouts/' + data.layout.id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data
  })
}

export const deleteLayout = (user, layoutId) => {
  return axios({
    url: apiUrl + '/layouts/' + layoutId,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
