import axios from "axios";

//login
export const login = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/user/loginUser`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
};

//register
export const signup = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/user/addUser`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//get all data
export const getDataById = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/user/getUser`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//update data
export const updateData = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/user/updateUser`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//delete data by id
export const deleteData = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/user/deleteUser`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//get all data
export const getAllData = async (values, role) => {
    axios
        .get(`http://localhost:4000/api/user/getAllUser`)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}
