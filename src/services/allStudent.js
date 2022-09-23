import axios from "axios";

const baseUrl = 'http://localhost:3003/api/student/list';

const getStudentsByPage = async (_page) => {
    const response = await axios.get(baseUrl, {
        params: {
            _page
        }
    });
    return response.data;
};

export{
    getStudentsByPage
};