import axios from "axios";

export default axios.create({
  baseUrl: "https://staging.diem.dev/",
});
