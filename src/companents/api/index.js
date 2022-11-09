 import axios from axios

 const API =axios.create({
  baseURL:'https://abbosxon.pm.track.uz:8020/advice'
 })

 export const fetchCategories=()=>API.get('/categories')