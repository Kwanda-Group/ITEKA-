// middlewares/ownership.middleware.js
export const isSelfOrAdmin = (req, res, next) => {
  if (
    req.user.role === "super_admin" ||
    req.user.role === "admin" ||
    req.user.id === req.params.id
  ) {
    return next();
  }

  return res.status(403).json({ message: "Access denied" });
};
