const getSheetData = require("./database");

exports.extractToArrayGuild = async (sheetId, sheetIndex) => {
  const sheet = await getSheetData(sheetId, sheetIndex);
  const rows = await sheet.getRows();
  let result = [];
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row.get("Player_Name") !== "" || row.get("Character_Name") !== "") {
      const data = {
        DiscordId: row.get("Discord_ID") || "-",
        PlayerName: row.get("Player_Name") || "-",
        CharacterName: row.get("Character_Name") || "-",
        Class: row.get("class") || "-",
        Level: parseInt(row.get("Level")) || "-",
        At: parseInt(row.get("AT")),
        Rd: parseInt(row.get("RD")),
        Workweek: parseInt(row.get("WW")) || 0,
        Ticket: parseInt(row.get("Ticket")) || 0,
        Race: row.get("Race") || "-",
        Background: row.get("Background") || "-",
        SheetLink: row.get("sheetlink") || "-",
      };
      result.push(data);
    }
  }
  return result;
};

exports.extractToArrayAccount = async (sheetId, sheetIndex) => {
  const sheet = await getSheetData(sheetId, sheetIndex);
  const rows = await sheet.getRows();
  let result = [];
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row.get("Discord_ID") !== "") {
      const data = {
        DiscordId: row.get("Discord_ID"),
        Password: row.get("Password"),
        Role: row.get("Role")
      };
      result.push(data);
    }
  }
  return result;
};

exports.patchToArray = async (discordId, Value, sheetId, sheetIndex) => {
  const sheet = await getSheetData(sheetId, sheetIndex);
  const rows = await sheet.getRows();
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row.get("Discord_ID") === discordId) {
      row.assign(Value);
      await row.save();
      break;
    }
  }
};

exports.deleteAnArray = async (discordId, sheetId, sheetIndex) => {
  const sheet = await getSheetData(sheetId, sheetIndex);
  const rows = await sheet.getRows();
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row.get("Discord_ID") === discordId) {
      await row.delete();
      break;
    }
  }
};
