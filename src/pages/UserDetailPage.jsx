import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../components/User";

export default function UpdatePage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("users"); // Get data from local storage
    const usersData = JSON.parse(data); // Parse the data from sring to javascript array
    const user = usersData.find((user) => user.id === id); // Find the user with the id from params
    console.log(user);
    setUser(user); // Set the user state with the data from local storage
  }, [id]);

  // Fetch user data based on ID
  // Example: const user = getUserById(id);

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>{user.name}</h1>
        <User user={user} />
        <div className="btns">
          <button className="btn-cancel">Delete User</button>
          <button>Update user</button>
        </div>
      </div>
    </div>
  );
}
