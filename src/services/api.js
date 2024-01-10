import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "0bef69c2698ec2652f694f782dbbbfbe",
        page: 1,
        language: "pt-BR"
    }
})