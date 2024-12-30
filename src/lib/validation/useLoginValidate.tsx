import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import *as yup from "yup";

export interface Ilogin {
    email:string,
    password:string
}

const useLoginValidate =()=>{
    const initialValue : Ilogin ={
        email:"",
        password:""
    }

    const schema = yup.object().shape({
        email: yup.string().email().required("Please Input Your Email"),
        password :yup.string().required("Please Input Your Password")
    })

    return useForm<Ilogin>({
        defaultValues:initialValue,
        mode:"all",
        reValidateMode:"onBlur",
        resolver:yupResolver(schema)
    })
}

export default useLoginValidate