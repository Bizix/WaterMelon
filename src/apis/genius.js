import axios from "axios";
     
export default axios.create({
  baseURL: "https://www.googleapis.com/customsearch/v1"
});
