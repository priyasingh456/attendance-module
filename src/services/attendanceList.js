import axios from "axios";

const baseUrl = 'https://attend-bakend.onrender.com/api/atten/list';

const getAttendance = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export{
    getAttendance
};