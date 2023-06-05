const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  async register(req, res, next) {
    try {
      let username = req?.body?.username;
      let password = req?.body?.password;

      if (!username) {
        throw new Error("Username must be provided!");
      }

      if (!password) {
        throw new Error("Password must be provided!");
      }

      var salt = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(password, salt);

      let response = await User.create({
        username,
        password,
      });

      if (response) {
        res.json({
          status: "OK",
          code: 200,
          data: `Register account ${username}  successfully!`,
        });
      }
    } catch (error) {
      res.json({
        status: "ERROR",
        code: error?.code || 400,
        message: error?.message || "Smt wrong has occured!",
      });
    }
  }

  async login(req, res, next) {
    try {
      let username = req?.body?.username;
      let password = req?.body?.password;

      if (!username) {
        throw new Error("Username must be provided!");
      }

      if (!password) {
        throw new Error("Password must be provided!");
      }

      let compareRes = await User.findOne({ username: username });

      if (compareRes) {
        let isValidPwd = bcrypt.compareSync(password, compareRes?.password);
        if (isValidPwd) {
          console.log(process.env.SECRET_JWT);
          let token = jwt.sign(
            {
              compareRes,
            },
            process.env.SECRET_JWT,
            { expiresIn: 60 * 60 }
          );

          res.json({
            status: "OK",
            code: 200,
            data: {
              token,
            },
          });
        } else {
          throw new Error("Password is incorrect!");
        }
      } else {
        throw new Error("Account is not existed!");
      }
    } catch (error) {
      res.json({
        status: "ERROR",
        code: error?.code || 400,
        message: error?.message || "Smt wrong has occured!",
      });
    }
  }

  async resetPassword(req, res, next) {}

  async getUserInfo(req, res, next) {
    try {
      let username = res?.locals?.username;
      let user = await User.findOne({ username });

      if (!user) {
        throw new Error("User does not existed!");
      } else {
        res.json({
          status: "OK",
          code: 200,
          data: {
            id: user?._id,
            username,
          },
        });
      }
    } catch (error) {
      res.json({
        status: "ERROR",
        code: error?.code || 400,
        message: error?.message || "Smt wrong has occured!",
      });
    }
  }
}

module.exports = new UserController();
