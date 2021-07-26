import axiosPackage from 'axios';

export const baseURL = 'https://test.kode-t.ru/';

export const axios = axiosPackage.create({
    baseURL,
});
