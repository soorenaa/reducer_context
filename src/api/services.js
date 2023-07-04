import axios from "axios";
import { SERVER_URL } from "../constance/const";

// @desc Get All Image Posts
// @route GET http://localhost:9000/images
export const getAllImagePosts = () => {
    const url = `${SERVER_URL}/images`;
    return axios.get(url);
};

// @desc Get All Image Single Post
// @route GET http://localhost:9000/images/id
export const getSinglePost = (id) => {
    const url = `${SERVER_URL}/images/${id}`;
    return axios.get(url);
};


