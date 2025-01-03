import { instance } from "../axios/axios";

export function cart() {
  return instance.get('/cart')
}

export function addToCart(data) {
  return instance.post('/cart', data)
}

export function updateCartProuductDetail(id, data) {
  return instance.put(`/cart/${id}`, data)
}

export function removeCartProuduct(id) {
  return instance.delete(`/cart/${id}`)
}

export function addOrder(data) {
  return instance.post('/orders', data)
}