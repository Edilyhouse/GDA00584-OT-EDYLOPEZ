import Rol from "../models/rolUsuariosModel.js";
import { findRol } from "../helpers/validateDatabaseInformation.js";

const crearRol = async (req, res) => {
  const { name } = req.body;

  // Convertir 'name' a minúsculas
  const nombre = name.toLowerCase();

  // Verificar que 'nombre' esté presente y 'req.body' solo tenga 'nombre'
  if (!nombre || Object.keys(req.body).length !== 1) {
    return res
      .status(400)
      .json({ message: "Solicitud inválida. Solo se debe incluir 'nombre'." });
  }

  // Validar longitud del nombre
  if (nombre.length <= 3) {
    return res
      .status(400)
      .json({ message: "Nombre Rol Inválido, debe tener mínimo 4 caracteres" });
  }

  try {
    // Verificar si el rol ya existe utilizando el helper
    const rolExist = await findRol(nombre, null);
    if (rolExist.error) {
      return res.status(400).json({ message: "El rol ya existe." });
    }
    const nuevoRol = await Rol.create({ nombre: nombre });

    return res
      .status(201)
      .json({ message: "Rol creado exitosamente.", rol: nuevoRol });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al crear el rol.", error: error.message });
  }
};

const actualizarRol = async (req, res) => {
  const { id, name } = req.body;
  const nombre = name.toLowerCase();
  const rolExist = await findRol(nombre, id);

  if (rolExist.error) {
    return res.status(400).json({ msg: rolExist.message });
  }

  try {
    const rolActualizado = await Rol.update(
      { nombre },
      { where: { idrol: id } }
    );
    return res.status(200).json({ msg: "Actualizado correctamente" });
  } catch (error) {
    console.log("Error al actualizar el rol: ", error);
    return res.status(500).json({ msg: "Hubo un error al actualizar el rol" });
  }
};

export { crearRol, actualizarRol };
