
const middlewareError = (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Rota não encontrada',
  });
};

module.exports = middlewareError;