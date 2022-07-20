import axios from 'axios';
import toastr from 'toastr';
toastr.options.progressBar = true;
toastr.options.closeButton = true;

export const RequestHeaders = {
    authHeaders: () => {
        return {
            'Content-Type': 'application/json',
            'Authorizations': `Bearer ${localStorage.getItem('active')}`,
            'Access-Control-Allow-Credentials': '*',
        }
    },
    comAuthHeaders: () => {
        return { 'Content-Type': 'application/json' }
    }
}

export const LoginRequest = async (url = "", data = {}) => {
    try {
        const response = await axios.post(url, data,
            { headers: RequestHeaders.comAuthHeaders(), }
        );
        return await response.data;
    } catch (e) { return e; }
};

export const RegisterRequest = async (url = "", data = {}) => {
    try {
        const response = await axios.post(url, data,
            { headers: RequestHeaders.comAuthHeaders(), }
        );
        return await response.data;
    } catch (e) { return e; }
};
 

export const PostDataBL = async (url = "", data = {}) => {
    try {
        const response = await axios.post(url, data,
            { headers: RequestHeaders.comAuthHeaders(), }
        );
        return await response.data;
    }
    catch (e) { return e; }
};

export const getData = async (url = "", data = {}) => {
    try {
        const response = await axios.get(url,
            { headers: RequestHeaders.authHeaders(), },
            data,
        );
        return await response.data;
    } catch (e) { return e; }
};

export const postData = async (url = "", data = {}) => {
    try {
        const response = await axios.post(url, data,
            { headers: RequestHeaders.authHeaders(), },
        );
        return await response.data;
    } catch (e) { return e; }
};

export const putData = async (url = "", data = {}) => {
    try {
        const response = await axios.put(url, data,
            { headers: RequestHeaders.authHeaders(), }
        );
        return await response.data;
    } catch (e) { return e; }
};

export const deleteData = async (url = "", data = {}) => {
    try {
        const response = await axios.delete(url,
            { headers: RequestHeaders.authHeaders(), },
            data,
        );
        return await response.data;
    } catch (e) { return e; }
};
 