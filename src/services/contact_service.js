import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/contact");
  }
}

export default new DataService();
