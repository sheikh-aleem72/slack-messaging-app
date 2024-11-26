import User from "../schema/user.js";
import crudRepository from "./crudRepository.js";

const userRepository = {
  ...crudRepository(User),
  getUserByEmail: async function (email) {
    const user = await User.findOne({ email });
    return user;
  },
  getByName: async function (username) {
    const user = await User.findOne({ username });
    return user;
  },
};

export default userRepository;
