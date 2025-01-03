import { instance } from "../axios/axios";

export function orders() {
  return instance.get('/cart')
}