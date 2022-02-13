import { requests } from "../httpServices";

interface IUser {
  name: string;
  email: string;
}

class UsersServices {
  getUsers(): Promise<IUser[]> {
    return requests.get(`/allUsers`);
  }
  postUser(body: {}): Promise<IUser> {
    return requests.post(`/users`, body);
  }
  updateUser(body: {}): Promise<IUser> {
    return requests.put(`/updateUser`, body);
  }
}

export default new UsersServices();
