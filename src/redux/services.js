import axios from "axios";
import { Buffer } from "buffer";

export const getAuth = async () => {
    return axios({
        url: "https://accounts.spotify.com/api/token",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " +
                Buffer.from(
                    process.env.REACT_APP_CLIENT_ID +
                    ":" +
                    process.env.REACT_APP_CLIENT_SECRET
                ).toString("base64"),
        },
        data: "grant_type=client_credentials",
    });
};