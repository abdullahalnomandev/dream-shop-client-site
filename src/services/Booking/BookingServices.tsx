import { IBooking } from "Types";
import { requests } from "./../httpServices";

class BookingServices {
  getBooking(): Promise<IBooking[]> {
    return requests.get(`/allOrder`);
  }
  getOwnBooking(): Promise<IBooking[]> {
    return requests.get(`/ownOrder`);
  }
  postBooking(body: {}): Promise<IBooking> {
    return requests.post(`/addBooking`, body);
  }
  deleteBooking(id: string): Promise<IBooking> {
    return requests.delete(`/booking/${id}`);
  }
  patchBooking(id: string): Promise<IBooking> {
    return requests.patch(`/Booking/${id}`);
  }
}

export default new BookingServices();
