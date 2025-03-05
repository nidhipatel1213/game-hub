import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0fdee433934f4b7397e45c0b34c8f95d"
    }
});
