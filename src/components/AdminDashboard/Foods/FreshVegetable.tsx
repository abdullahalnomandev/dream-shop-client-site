import AdminAddProductDialog from "components/Common/AdminAddProductDialog/AdminAddProductDialog";
import AdminTable from "components/Common/AdminTable/AdminTable";
import useAsync from "hooks/useAsync";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers/reducers";
import FreshVegetableServices from "services/Food/FreshVegetableServices";

const FreshVegetable = () => {
  const { grocery } = useSelector((state: IRootState) => state.grocery);
  const { data } = useAsync(FreshVegetableServices.getFreshVegetable);
  const groceryItem = grocery[0];

  const handleSubmit = () => {
    if (groceryItem) {
      FreshVegetableServices.postFreshVegetable(groceryItem).then((res) => {
        if (res) {
          alert("Vegetable Added successful.");
        }
      });
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [groceryItem]);

  return (
    <div className="container">
      <h1 className="text-center"> Fresh Vegetable</h1>
      <AdminAddProductDialog handleSubmit={handleSubmit} />
      <AdminTable data={data} />
    </div>
  );
};

export default FreshVegetable;
