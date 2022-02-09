import { IGroceryItem } from "Types";
import { requests } from "../httpServices";

class FreshVegetableServices {
  getFreshVegetable(): Promise<IGroceryItem[]> {
    return requests.get(`/allFresh_vegetables`);
  }
  postFreshVegetable(body: {}): Promise<IGroceryItem> {
    console.log('body',body);
    
    return requests.post(`/fresh_vegetables`, body);
  }
  deleteFreshVegetable(id: string): Promise<IGroceryItem> {
    return requests.delete(`/fresh_vegetables/${id}`);
  }
  patchFreshVegetable(id: string): Promise<IGroceryItem> {
    return requests.patch(`/fresh_vegetables/${id}`);
  }
}

export default new FreshVegetableServices();
