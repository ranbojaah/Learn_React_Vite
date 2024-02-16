import axios from 'axios'

export const getProdcuts = (callback) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
