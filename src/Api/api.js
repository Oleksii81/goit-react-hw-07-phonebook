import axios from "axios";


axios.defaults.baseURL = `https://655228685c69a77903299caa.mockapi.io`;


export const addContact = async (contactData) => {
    const response = await axios.post(`/contacts`, contactData)
    return response.data
};


export const allContacts  = async () => {
    const response = await axios.get(`/contacts`);
    return response.data
};


export const removeContact = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data
};