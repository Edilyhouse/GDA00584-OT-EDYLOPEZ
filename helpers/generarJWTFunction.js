import jwt from "jsonwebtoken";

const generarJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "sda360dec-january", {
    expiresIn: "5m",
  });
};

export default generarJWT;
