const User = require("../models/user");
const getUserService = async(id) => {
    return await User.findById(id).select("-password");
}
module.exports = {getUserService}