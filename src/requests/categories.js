import { instance } from "../axios/axios";

export function categories() {
  return instance.get('/categories')
}