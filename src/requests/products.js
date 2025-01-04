import { instance } from "../axios/axios";

export function products() {
  return instance.get('/products')
}

export function product(id) {
  return instance.get(`/products/${id}`);
}

export function updateProduct(id, data) {
  return instance.put(`/products/${id}`, data)
}

export function deleteProduct(id) {
  return instance.delete(`/products/${id}`)
}

export function favorites() {
  return instance.get('/favorites')
}

export function addToFavorites(id, data) {
  return instance.post(`/products/${id}/add-to-favorites`, data);
}

export function removeFromFavorites(id) {
  return instance.delete(`/products/${id}/remove-from-favorites`);
}