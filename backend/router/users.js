const { Router } = require("express");

const router = Router();

const usuarios = ['Juan', 'María', 'Carlos'];

router.get('/api/users', (req, res) => {
  res.json({
    msg: "ok",
    data: usuarios
  });
});

module.exports = router;
