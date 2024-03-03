import axios from "axios";

interface LOGIN {
    email: string;
    password: string;
}

export const loginService = async (body: LOGIN) =>
    axios.get(`https://cmt-server-1.vercel.app/api/ping`).then((response: any) => response);
    // axios.post(`/login`, body).then((response: any) => response);