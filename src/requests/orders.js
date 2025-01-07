import { instance } from "../axios/axios";

export function orders() {
  return instance.get('/orders')
}

export function allOrders() {
  return instance.get('/allOrders')
}

export function updateOrderStatus(id, data) {
  return instance.put(`/orders/${id}`, data)
}