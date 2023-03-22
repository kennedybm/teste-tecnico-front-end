import axios from "axios";

export const postsURL = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const usersURL = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});
