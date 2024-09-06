import { useState, useEffect } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    getUsers();

    async function getUsers() {
      const data = localStorage.getItem("users"); // Get data from local storage
      let usersData = []; // Parse the data from string to javascript array

      if (data) {
        // If data exists in local storage
        usersData = JSON.parse(data); // Parse the data from string to javascript array
      } else {
        // If data does not exist in local storage, instead fetch the data from the API
        usersData = await fetchUsers();
      }

      console.log(usersData);
      setUsers(usersData); // Set the users state with the data from local storage
      usersData.sort((user1, user2) => user1.name.localeCompare(user2.name));
    }
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    ); // Fetch the data from the API
    const data = await response.json(); // Parse the data from string to javascript array
    localStorage.setItem("users", JSON.stringify(data)); // Save the data to local storage
    return data; // Return the data
  }

  return (
    <div className="page">
      <section className="grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
}
