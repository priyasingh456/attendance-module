import axios from "axios";

const baseUrl = 'https://attend-bakend.onrender.com/api/student/list';

const getStudentsByPage = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export{
    getStudentsByPage
};