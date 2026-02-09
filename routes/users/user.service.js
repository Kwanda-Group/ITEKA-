// modules/users/user.service.js
import userModal from "../../models/userModal";

export const createUser = (data) => {
  return  userModal .create(data);
};

export const getAllUsers = (filters = {}) => {
  return  userModal .find(filters).select("-password_hash");
};

export const getUserById = (id) => {
  return  userModal .findById(id).select("-password_hash");
};

export const updateUser = (id, data) => {
  return  userModal .findByIdAndUpdate(id, data, { new: true });
};

export const changeUserRole = (id, role) => {
  return  userModal .findByIdAndUpdate(id, { role }, { new: true });
};

export const disableUser = (id, status = "inactive") => {
  return  userModal .findByIdAndUpdate(id, { status }, { new: true });
};
