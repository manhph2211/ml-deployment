const user = require("./users")

function route(app) {
    app.use("/users", user)
}

module.exports = route