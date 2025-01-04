export const instance = axios.create({
    baseURL: 'http://vlad-diplom-backend/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    },
    withCredentials: true,
});


export function getToken() {
    return localStorage.getItem('token');
}