import Usuario from "../models/usuarioModel.js";
import { sequelize } from "../config/db.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/generarJWTFunction.js";

import { findRol, findEstado } from "../helpers/validateDatabaseInformation.js";

const crearUsuario = async (req, res) => {
  const {
    rol_idrol,
    correo,
    nombre_completo,
    password,
    telefono,
    fecha_nacimiento,
    estados_idestados,
    razon_social,
    nombre_comercial,
    direccion_entrega,
    email_cliente,
  } = req.body;

  try {
    const rolExists = await findRol(null, rol_idrol);
    const estadoExist = await findEstado(null, estados_idestados);

    if (!estadoExist) {
      return res
        .status(400)
        .json({ message: "El estado especificado no existe." });
    }

    //  Hashear password
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const usuarioJSON = JSON.stringify({
      rol_idrol,
      correo: correo.toLowerCase(),
      nombre_completo: nombre_completo.toLowerCase(),
      password: hashedPassword,
      telefono: telefono,
      fecha_nacimiento: fecha_nacimiento.toLowerCase(),
      estados_idestados,
    });

    const clienteJSON =
      rol_idrol === 1
        ? JSON.stringify({
            razon_social: razon_social.toLowerCase(),
            nombre_comercial: nombre_comercial.toLowerCase(),
            direccion_entrega: direccion_entrega.toLowerCase(),
            email: email_cliente.toLowerCase(),
          })
        : null;

    await sequelize.query(
      `EXEC InsertarUsuarioConCliente @usuario = :usuario, @cliente = :cliente`,
      {
        replacements: { usuario: usuarioJSON, cliente: clienteJSON },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res.status(201).json({ message: "Usuario creado exitosamente." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al crear el usuario.", error: error.message });
  }
};

const actualizarUsuario = async (req, res) => {
  const { id, correo, nombre_completo, password, telefono } = req.body;

  try {
    // Cifrar la contraseña antes de actualizar
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await sequelize.query(
      `EXEC ActualizarUsuario @id = :id, @correo = :correo, @nombre_completo = :nombre_completo, @password = :password, @telefono = :telefono`,
      {
        replacements: {
          id,
          correo: correo.toLowerCase(),
          nombre_completo: nombre_completo.toLowerCase(),
          password: hashedPassword,
          telefono: telefono,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res
      .status(200)
      .json({ message: "Usuario actualizado exitosamente." });
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el usuario",
      error: error.message,
    });
  }
};

const autenticarUsuario = async (req, res) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el usuario existe
    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }

    // Generar token JWT
    const token = generarJWT(usuario.idUsuario);

    const { nombre_completo, estados_idestados, email } = usuario;

    return res
      .status(200)
      .json({ nombre_completo, estados_idestados, correo, token });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Hubo un error al autenticar el usuario" });
  }
};

export { actualizarUsuario, crearUsuario, autenticarUsuario };
