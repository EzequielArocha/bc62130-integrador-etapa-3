const handleError = (res, mensaje = "Algo salió mal", codigo = 500) => {
  return res.status(codigo).json({ ok: false, error: mensaje });
};

export default handleError;
