   import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function EditForm({ user, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
      alert("All fields are required.");
      return;
    }
    onSave(formData); 
  };

  return (
<div className="mt-10 p-6 bg-gray-100 rounded shadow-md md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">First Name:</label>
      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded block w-full focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Last Name:</label>
      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded block w-full focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded block w-full focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded block w-full focus:ring-blue-500 focus:border-blue-500" />
    </div>
    <div className="flex space-x-4">
  <button
    type="submit"
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 focus:ring-blue-600 focus:ring-offset-2 shadow-md"
  >
    Save Changes
  </button>
  <button
    type="button"
    onClick={onCancel}
    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 focus:ring-red-600 focus:ring-offset-2 shadow-md"
  >
    Cancel
  </button>
</div>


  </form>
</div>

  );
}

EditForm.propTypes = {
  user: PropTypes.user,
  onSave: PropTypes.onSave,
  onCancel: PropTypes.onCancel,
};

export default EditForm;