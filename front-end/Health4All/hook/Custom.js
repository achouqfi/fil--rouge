import axios from "axios";

//login
export const login = async (values, role) => {
    console.log(values, `http://localhost:4000/api/${role}`);
    axios 
        .post(`http://localhost:4000/api/${role}`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
};

//register
export const signup = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/${role}`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//get all data
export const getDataById = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/${role}`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//update data
export const updateData = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/${role}`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//delete data by id
export const deleteData = async (values, role) => {
    axios
        .post(`http://localhost:4000/api/${role}`, values)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}

//get all data
export const getAllData = async (values, role) => {
    axios
        .get(`http://localhost:4000/api/${role}`)
        .then(res =>console.log(res.data))
        .catch(err=>console.log(err))
}
