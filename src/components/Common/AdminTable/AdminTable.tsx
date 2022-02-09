import React from 'react';
import { Table } from 'react-bootstrap';
import FreshFoodServices from "services/Food/FreshFoodServices";
import FreshVegetableServices from "services/Food/FreshVegetableServices";
import { IGroceryItem } from 'Types';

interface IProps {
    data:IGroceryItem[] | null
}



const AdminTable = ({data}:IProps) => {
  

  const handleDelete = (id:string)=>{

    FreshVegetableServices.deleteFreshVegetable(id)
    FreshFoodServices.deleteFreshFood(id)
    .then((res)=>{
      if(res){
        alert('Delete success')
      }
    })
    .catch((err)=>{
      alert(err);
    
    })
    
  }
    return (
        <div>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>image</th>
              <th className="w-25">Product Name</th>
              <th className="w-25">Product Price</th>
              <th className="w-25">Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((pd:IGroceryItem, index:number) => (
              <tr key={pd._id}>
                  <td>{index + 1}</td>
                <td><img className="img-fluid " style={{width:'60px'}} src={pd.image} alt="" /></td>
                <td>{pd.name}</td>
                <td>{pd.price}</td>
                <td>{pd.quantity}</td>
                <td><button className="btn btn-danger" onClick={()=>handleDelete(pd._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
    );
};

export default AdminTable;