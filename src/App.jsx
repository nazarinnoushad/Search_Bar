import { useState } from "react";
import { data } from "./data/data";
import User from "./components/user";
import EditForm from "./components/form/EditForm.jsx";
import AddForm from "./components/form/AddForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [addForm, setAddForm] = useState(false);
  const [users, setUsers] = useState(data);
  const [editingUser, setEditingUser] = useState(null);

  // Delete
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    updatedUsers.forEach((user, index) => {
      user.id = index + 1;
    });
    setUsers(updatedUsers);
  };
  
  

  // Edit 

  const handleEdit = (user) => {
    setEditingUser(user); // Set the user to be edited
  };

  const handleUpdateUser = (modifiedData, id) => {
    setUsers(
      users.map((item) => {
        return item.id === id ? { ...item, ...modifiedData } // Update user with the modified data
          : item;
      })
    );
    setEditingUser(null); // Close the edit form after updating
  };

  const handleSaveEdit = (modifiedData) => {
    if (editingUser) {
      handleUpdateUser(modifiedData, editingUser.id); // Pass formData directly for updating
    }
  };

  // Add User

  const handleAddUser = (newUser) => {
    const newEntry = { id: users.length + 1, ...newUser };
    const updatedUsers = [...users, newEntry];
    setUsers(updatedUsers);
    setAddForm(false);
  };
  

  return (
    <div className="p-6 flex flex-col">
      <div className="flex justify-between mb-4">
        <div className="w-1/2">
          {/* Search bar */}
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            className="w-full p-4 pl-10 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg"
            placeholder="Search here..."
          />
        </div>
        <div className="text-right">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded hover:bg-gray-200 focus:ring-gray-500 focus:ring-offset-2"
            onClick={() => setAddForm(true)}
          >
            Add User
          </button>
        </div>
      </div>
      {addForm && (
        <div className="mt-4">
          <AddForm
            onAdd={(newUser) => handleAddUser(newUser)}
            onCancel={() => setAddForm(false)}
          />
        </div>
      )}
      {editingUser && (
        <div className="mt-6">
          <EditForm
            user={editingUser}
            onSave={handleSaveEdit}
            onCancel={() => setEditingUser(null)}
          />
        </div>
      )}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6">First Name</th>
            <th className="py-3 px-6">ID</th>
            <th className="py-3 px-6">Last Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Phone</th>
            <th className="py-3 px-6 text-hidden"></th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              return searchTerm.toLowerCase() === ""
                ? user
                : user.first_name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((user) => (
              <User
                key={user.id}
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


