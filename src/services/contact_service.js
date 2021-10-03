import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/contact");
  }
  delete(id) {
    return http.delete(`/contact/${id}`);
  }
  create(data) {
    return http.post("/contact", data);
  }
}

export default new DataService();
