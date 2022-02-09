import { IBooking } from "Types";
import { requests } from "./../httpServices";

class BookingServices {
  getBooking(): Promise<IBooking[]> {
    return requests.get(`/allBooking`);
  }
  postBooking(body: {}): Promise<IBooking> {
    return requests.post(`/addBooking`, body);
  }
  deleteBooking(id: string): Promise<IBooking> {
    return requests.delete(`/Booking/${id}`);
  }
  patchBooking(id: string): Promise<IBooking> {
    return requests.patch(`/Booking/${id}`);
  }
}

export default new BookingServices();
