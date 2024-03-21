import { User } from "../models/models.js";

export const getInfo = async (req, res) => {
  const { code } = req.params;

  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ username: code });
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
