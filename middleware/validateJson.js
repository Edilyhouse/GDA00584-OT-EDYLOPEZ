// middlewares/validateJson.js
export const validateJson = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res
      .status(400)
      .json({ message: "Error en la solicitud, revisa el contenido enviado." });
  }
  next();
};
