const router = require("express").Router();
const {
  create,
  getAll,
  addOrRemove,
  getOne,
  patchGeneral,
  deleteOne,
} = require("../Controller/character");

router.get("/guild/char/", getAll);

router.get("/guild/char/:discordId", getOne);

router.patch("/guild/char/:discordId", patchGeneral);

router.put("/guild/char/:discordId", addOrRemove);

router.delete("/guild/char/:discordId", deleteOne);

router.post("/guild/char/", create);

module.exports = router;
