import useAuth from "hooks/useAuth";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="ms-md-5 text-center">
      <div
        className="profile text-center w-75 m-auto  mt-5 p-4 pt-4"
        style={{ border: "1px solid #ddd" }}
      >
        {!user.photoURL && (
          <img
            src="https://static.thenounproject.com/png/17241-200.png"
            alt=""
          />
        )}
        {user.photoURL && (
          <img style={{ borderRadius: "100%" }} src={user.photoURL} alt="" />
        )}

        <h3 className="mt-2">{user.displayName}</h3>
        <p>{user.email}</p>
        <div className="mt-3 log-out">
          <Link to="/">
            <button className="btn-danger px-2 py-1 rounded" onClick={logOut}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
