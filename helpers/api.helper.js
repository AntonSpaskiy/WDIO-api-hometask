const axios = require('axios');

const sendRequest = async (url, data = null, method = null) => {
    try {
        const response = await axios(
            {
                method,
                url: `https://gorest.co.in/public/v2/${url}`,
                headers: {
                },
                data
            });
            return {
                status: response.status,
                data: response.data
            };
    }
    catch(error) {
        return {
            status: error.response.status
        };
    }
};

module.exports = {
    sendRequest
};