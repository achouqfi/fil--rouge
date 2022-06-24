import axios from "axios";
import { useNavigation } from "@react-navigation/native";

//login
export const login = async (values, role,) => {
    axios 
        .post(`http://192.168.0.188:8000/api/${role}`, values)
        .then(res =>{
            const navigation = useNavigation();
            const goTo = to => navigation.navigate(to);
            return {goTo};
        })
        .catch(err=>console.log(err))
};

//registerr
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
