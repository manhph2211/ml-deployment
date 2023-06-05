const jwt = require("jsonwebtoken");

const authMiddleWare = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw new Error(
        JSON.stringify({
          code: 403,
          message: "Missing credentials",
        })
      );
    }
    token = token.replace("Bearer ", "");
    console.log(token);

    jwt.verify(token, process.env.SECRET_JWT, function (err, decoded) {
      if (err) {
        res.json({
          status: "ERROR",
          code: 403,
          message: "Invalid Credentials",
        });
      } else {
        res.locals.username = decoded?.compareRes?.username
        next()
      }
    });
  } catch (error) {
    error = JSON.parse(error?.message);
    res.json({
      status: "ERROR",
      code: error?.code || 400,
      message: error?.message || "Smt wrong has occured!",
    });
  }
};

module.exports = authMiddleWare;
