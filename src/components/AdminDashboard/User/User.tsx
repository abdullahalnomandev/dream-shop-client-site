import loader from "assets/images/loader.gif";
import useAsync from "hooks/useAsync";
import React from "react";
import { Table } from "react-bootstrap";
import UserServices from "services/Users/UserServices";

const User = () => {
  //GET API
  const { data } = useAsync(UserServices.getUsers);
  return (
    <div className="text-center ms-md-5">
      <h1>USER</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO.</th>
            <th> Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {!data?.length && (
            <div className="text-center">
              <img className="img-fluid" src={loader} alt="" />
            </div>
          )}
          {data?.map((user, index) => (
            <tr key={user.email}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
