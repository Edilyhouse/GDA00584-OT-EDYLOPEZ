import jwt from "jsonwebtoken";
import Usuario from "../models/usuarioModel.js";

const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "sda360dec-january"
      );

      // Busca el usuario en la base de datos
      const usuario = await Usuario.findByPk(decoded.id, {
        attributes: {
          exclude: [
            "password",
            "confirmado",
            "token",
            "createdAt",
            "updatedAt",
            "__v",
          ],
        },
      });

      if (!usuario) {
        return res.status(404).json({ msg: "Usuario no encontrado" });
      }

      req.usuario = usuario;
      next();
    } catch (error) {
      return res.status(401).json({
        msg: "Token inválido o expirado, por favor inicie sesión nuevamente",
      });
    }
  } else {
    return res
      .status(401)
      .json({ msg: "Autorización requerida, por favor inicie sesión" });
  }
};

export default checkAuth;
