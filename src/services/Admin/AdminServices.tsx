import { requests } from "../httpServices";

interface IAdmin {
  email: string;
}

class AdminServices {
  getAdmin(): Promise<IAdmin[]> {
    return requests.get(`/allOrder`);
  }
  postAdmin(body: {}): Promise<IAdmin> {
    return requests.put(`/user/admin`, body);
  }
  checkAdmin(email: string): Promise<IAdmin> {
    return requests.get(`/user/${email}`);
  }
}

export default new AdminServices();
