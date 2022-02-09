import AdminAddProductDialog from "components/Common/AdminAddProductDialog/AdminAddProductDialog";
import AdminTable from "components/Common/AdminTable/AdminTable";
import useAsync from "hooks/useAsync";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers/reducers";
import FreshFoodServices from "services/Food/FreshFoodServices";

const FreshFood = () => {
  // const dispatch = useDispatch();
  const { grocery } = useSelector((state: IRootState) => state.grocery);
  const { data } = useAsync(FreshFoodServices.getFreshFood);

  const groceryItem = grocery[0];
  console.log("groceryItem", groceryItem);


  

  const handleSubmit = () => {
    
    if (groceryItem) {
      FreshFoodServices.postFreshFood(groceryItem).then((res) => {
        if (res) {
          alert("Grocery Added successful.");
          // dispatch(clearGrocery());
        }
      
      });
    }
   
  };

  useEffect(()=>{
    handleSubmit()
  },[groceryItem])




  return (
    <div className="container">
      <h1 className="text-center">Fresh Food</h1>
      <AdminAddProductDialog handleSubmit={handleSubmit} />
      <div className="table">
        <AdminTable data={data} />
      </div>
    </div>
  );
};

export default FreshFood;
