import axios from "axios";

const KEY = "AIzaSyANsR6P6k0Mi2ImhOmFk-8KDlVZbL1JgOc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY }
});
