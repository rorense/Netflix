import axios from "axios";

// this function is used to fetch data from the url for the front end
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
