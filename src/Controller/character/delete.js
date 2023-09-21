const { extractToArrayGuild, deleteAnArray } = require("../../Util/mapSheet");

exports.deleteOne = async (req, res) => {
  let data;
  const array = await extractToArrayGuild(
    "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
    0
  );
  array.map((i) => {
    if (i.DiscordId !== req.params.discordId) {
      return;
    } else {
      data = i;
    }
  });
  if (!data) return res.status(404).send("character not found");
  await deleteAnArray(
    req.params.discordId,
    "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
    0
  );

  res.status(200).send(`Character ${data.CharacterName} has been deleted`);
};
