import axiosPackage from 'axios';

export const axios = axiosPackage.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    maxBodyLength: Infinity,
});
