import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMySections = user => {
  return axios({
    url: apiUrl + '/sections',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getSection = (user, sectionId) => {
  return axios({
    url: apiUrl + '/sections/' + sectionId,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const createSection = (user, data) => {
  return axios({
    url: apiUrl + '/sections',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data
  })
}

export const updateSection = (user, data) => {
  return axios({
    url: apiUrl + '/sections/' + data.section.id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data
  })
}

export const deleteSection = (user, sectionId) => {
  return axios({
    url: apiUrl + '/sections/' + sectionId,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
