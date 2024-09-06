import { useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mail, setMail] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleCancel() {
    navigate(-1);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      id: Date.now().toString(), // Create a unique id
      name: name,
      title: title,
      mail: mail,
      image: image,
    };

    console.log(newUser);

    const data = localStorage.getItem("users"); // Get data from local storage
    const usersData = JSON.parse(data) || []; // Parse the data from string to javascript array

    usersData.push(newUser); // Add the new user to the array
    localStorage.setItem("users", JSON.stringify(usersData)); // Save the users array to local storage

    navigate("/"); // navigate to the home page after clicking "create"
  }
  return (
    <div className="page">
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Type a name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Type a title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="mail">Mail</label>
        <input
          id="mail"
          type="mail"
          placeholder="Type a mail"
          onChange={(e) => setMail(e.target.value)}
        />

        <label htmlFor="mail">Image URL</label>
        <input
          type="url"
          placeholder="Paste image url"
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="image-preview"></label>
        <img
          id="image-preview"
          className="image-preview"
          src={image}
          alt="Choose"
          onError={(e) =>
            (e.target.src =
              "https://placehold.co/600x400?text=Error+loading+image")
          }
        />

        <button type="button" className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button>Create</button>
      </form>
    </div>
  );
}
