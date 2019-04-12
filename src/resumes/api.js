import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMyResumes = user => {
  return axios({
    url: apiUrl + '/resumes',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const getResume = (user, resumeId) => {
  return axios({
    url: apiUrl + '/resumes/' + resumeId,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const createResume = (user, data) => {
  return axios({
    url: apiUrl + '/resumes',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data
  })
}

export const updateResume = (user, data) => {
  return axios({
    url: apiUrl + '/resumes/' + data.resume.id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data
  })
}

export const deleteResume = (user, resumeId) => {
  return axios({
    url: apiUrl + '/resumes/' + resumeId,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
