import request from '@/http/request.js';

export const getScreenData = () => {
    return request({
        url: '/visualization',
    });
};
