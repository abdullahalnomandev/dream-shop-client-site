import { IGroceryItem } from "Types";
import { requests } from "./../httpServices";

class FreshFoodServices {
  getFreshFood(): Promise<IGroceryItem[]> {
    return requests.get(`/allFresh_foods`);
  }
  postFreshFood(body: {}): Promise<IGroceryItem> {
    return requests.post(`/fresh_foods`, body);
  }
  deleteFreshFood(id: string): Promise<IGroceryItem> {
    return requests.delete(`/fresh_foods/${id}`);
  }
 
}

export default new FreshFoodServices();
