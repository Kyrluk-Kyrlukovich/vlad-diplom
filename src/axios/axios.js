const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    withCredentials: true,
});