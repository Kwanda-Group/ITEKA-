// modules/users/user.controller.js
import * as UserService from "./user.service.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.json({ success: true, users });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

export const changeRole = async (req, res, next) => {
  try {
    const user = await UserService.changeUserRole(req.params.id, req.body.role);
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

export const disableUser = async (req, res, next) => {
  try {
    const user = await UserService.disableUser(req.params.id, req.body.status);
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};
