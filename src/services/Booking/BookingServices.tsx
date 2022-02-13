import { IBooking } from "Types";
import { requests } from "./../httpServices";

class BookingServices {
  getBooking(): Promise<IBooking[]> {
    return requests.get(`/allOrder`);
  }
  getOwnBooking(email: string): Promise<IBooking[]> {
    return requests.get(`/ownOrder?email=${email}`);
  }
  postBooking(body: {}): Promise<IBooking> {
    return requests.post(`/addBooking`, body);
  }
  deleteBooking(id: string): Promise<IBooking> {
    return requests.delete(`/booking/${id}`);
  }
}

export default new BookingServices();
