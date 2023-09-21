const { extractToArrayGuild } = require("../../Util/mapSheet");

exports.getAll = async (req, res) => {
  const result = await extractToArrayGuild("1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU", 0);
  res.json(result);
};

exports.getOne = async (req, res) => {
  const result = await extractToArrayGuild("1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU", 0);
  let data = null;
  result.map((i) => {
    if (i.DiscordId !== req.params.discordId) {
      return;
    } else {
      data = i;
    }
  });

  if (data === null) {
    return res.status(404).send("Character not found");
  }
  res.json(data);
};
