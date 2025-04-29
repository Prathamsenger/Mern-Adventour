import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]); 
  const [editUserData, setEditUserData] = useState(null); 

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/users'); 
      setUsers(response.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${id}`); 
      setUsers(users.filter((user) => user._id !== id)); 
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user.');
    }
  };

  const editUser = (user) => {
    setEditUserData({
      username: user.username || '',
      email: user.email || '',
      phone: user.phone || '',
      role: user.role || '',
      _id: user._id, // Ensure the ID is included
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/users/${editUserData._id}`, editUserData);
      alert('User updated successfully!');
      setEditUserData(null); // Clear the form after submission
      fetchUsers(); 
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container  bg-blue-900 mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Users List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-t border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => editUser(user)}
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit User Form */}
      {editUserData && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Edit User</h2>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Username:</label>
              <input
                type="text"
                value={editUserData.username} // Controlled input
                onChange={(e) => setEditUserData({ ...editUserData, username: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={editUserData.email} // Controlled input
                onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone:</label>
              <input
                type="text"
                value={editUserData.phone} // Controlled input
                onChange={(e) => setEditUserData({ ...editUserData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Role:</label>
              <input
                type="text"
                value={editUserData.role} // Controlled input
                onChange={(e) => setEditUserData({ ...editUserData, role: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Users;