import axios from "axios"

const api = axios.create({
  baseURL: "https://codechallenge-backend.herokuapp.com"
})

export const sendMail = async mail => {
  const response = await api.post("/mail", mail)
  return response
}

export default api
