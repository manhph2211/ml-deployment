const express = require("express");
const UserControllers = require("../controllers/UserControllers");
const authMiddleWare = require("../middleware/auth");
const router = express.Router();

router
  .get("/", (req, res, next) => {
    res.json({
      status: "OK",
      code: 200,
      data: "OK",
    });
  })
  .post("/", (req, res, next) => {});

router.post("/register", UserControllers.register);

router.post("/login", UserControllers.login);

router.get("/me", authMiddleWare, UserControllers.getUserInfo);

module.exports = router;
