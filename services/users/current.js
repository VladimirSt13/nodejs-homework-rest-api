const { error } = require("../../helpers/error");
const { User } = require("../../models");

const current = async (_id) => {
  const result = await User.findById(_id);

  if (!result) {
    throw error(401, "Not authorized");
  }
  console.log("result :>> ", result.email);
  return result;
};

module.exports = {
  current,
};
