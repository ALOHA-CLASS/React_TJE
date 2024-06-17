import axios from "axios";

export const boardList = () => axios.get("/boards")
  

export const boardInsert = (title, writer, content) => axios.post("/boards", {title, writer, content})