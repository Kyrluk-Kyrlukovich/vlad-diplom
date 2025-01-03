export const instance = axios.create({
    baseURL: 'http://vlad-diplom-backend/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true,
});