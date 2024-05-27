function getHealthStatusController (req, res) {
  return res.status(200).json({
    "healt": "i'm alive",
    "status": 200,
    "message": "ok"
  })
}

module.exports = {
  getHealthStatusController
}
