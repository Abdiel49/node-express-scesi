function validateUser(req, res, next) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
  
    // Expresión regular para validar el formato del email
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  
    // luis@gmail.com:
    // luis cumple con ^[^\s@]+ (caracteres antes del @).
    // @ cumple con el símbolo requerido @.
    // gmail cumple con [^\s@]+ (caracteres después del @).
    // . cumple con \. (punto literal).
    // com cumple con [^\s@]+$ (caracteres después del punto).
  
    // Verificar que el email tenga un formato válido
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
  
    next(); // Llamamos a next() para que la solicitud continúe hacia el siguiente middleware o ruta
  }
  
  module.exports = validateUser;
  