import axios from "axios";

const baseUrl = 'http://localhost:3003/api/atten/list';

const getAttendance = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export{
    getAttendance
};