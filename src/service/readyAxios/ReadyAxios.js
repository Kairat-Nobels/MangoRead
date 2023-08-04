import axios from 'axios'
import { links } from '../links/links'

export const axiosSignUp = axios.create({
  method: 'POST',
  baseURL: links.signUpLink,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
export const axiosSignIn = axios.create({
  method: 'POST',
  baseURL: links.signInLink,
  headers: {
    'Content-Type': 'application/json'
  }
})
export const axiosAuth = axios.create({
  method: 'GET',
  baseURL: links.authLink,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const axiosLogOut = axios.create({
  method: 'POST',
  baseURL: links.logOut
})
export const axiosTopManga = axios.create({
  method: 'GET',
  baseURL: links.topMangaLink
})

export const axiosManga = axios.create({
  method: 'GET',
  baseURL: links.mangaLink
})

export const axiosGenre = axios.create({
  method: 'GET',
  baseURL: links.genreLink
})

export const axiosComm = axios.create({
  baseURL: links.mangaLink,
  headers: {
    'Content-Type': 'application/json'
  }
})
