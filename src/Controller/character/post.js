const calLevel = require("../../Util/levelCal");
const { extractToArrayGuild } = require("../../Util/mapSheet");

module.exports = post = async (req, res) => {
  const {
    DiscordId,
    Background,
    Race,
    SheetLink,
    PlayerName,
    CharacterName,
    Class,
  } = req.body;
  const sheet = await getSheetData("1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU", 0);
  if (!DiscordId || !SheetLink || !PlayerName || !CharacterName || !Class) {
    return res.status(404).send("Parameter not found");
  }

  let data;
  const array = await extractToArrayGuild("1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU", 0)
  array.map((i) => {
    if (i.DiscordId !== DiscordId) {
      return;
    } else {
      data = i;
    }
  });
  if (data) return res.status(404).send("already exits");

  await sheet.addRow({
    Discord_ID: DiscordId,
    Player_Name: PlayerName,
    Character_Name: CharacterName,
    AT: 0,
    Level: 1,
    sheetlink: SheetLink,
    class: Class,
    RD: 0,
    WW: 10,
    Ticket: 5,
    Race: Race || "-",
    Background: Background || "-",
  });
  res.status(200).send("Added Character successfully");
};
