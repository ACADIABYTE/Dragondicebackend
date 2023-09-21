const { extractToArrayGuild, patchToArray } = require("../../Util/mapSheet");
const levelCal = require("../../Util/levelCal");

exports.patchGeneral = async (req, res) => {
  const { Background, Race, SheetLink, PlayerName, CharacterName, Class } =
    req.body;

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
  await patchToArray(
    req.params.discordId,
    {
      Player_Name: PlayerName || data.PlayerName,
      Character_Name: CharacterName || data.CharacterName,
      sheetlink: SheetLink || data.SheetLink,
      class: Class || data.Class,
      Race: Race || data.Race,
      Background: Background || data.Background,
    },
    "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
    0
  );

  res.status(200).send(`Character ${data.CharacterName} has been updated`);
};

exports.addOrRemove = async (req, res) => {
  const { Value, Key } = req.body;

  const state = Value.substring(0, 1);
  const num = parseInt(Value.substring(1));
  const array = await extractToArrayGuild("1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU", 0);
  let data;
  array.map((i) => {
    if (i.DiscordId !== req.params.discordId) {
      return;
    } else {
      data = i;
    }
  });
  if (!data) return res.status(404).send("character not found");
  let newData = 0;
  if (state === "+") {
    switch (Key) {
      case "At":
        newData = data.At + num;
        if (newData > 230) newData = 230;
        const level = levelCal(newData);
        await patchToArray(
          req.params.discordId,
          {
            AT: newData,
            Level: level,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
      case "Rd":
        newData = data.Rd + num;
        await patchToArray(
          req.params.discordId,
          {
            RD: newData,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
      case "Ww":
        newData = data.Workweek + num;
        if (newData > 10) newData = 10;
        await patchToArray(
          req.params.discordId,
          {
            WW: newData,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
      case "Ticket":
        newData = data.Ticket + num;
        if (newData > 5) newData = 5;
        await patchToArray(
          req.params.discordId,
          {
            Ticket: newData,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
    }
    return res.status(200).send("Updated successfully");
  } else if (state === "-") {
    switch (Key) {
      case "At":
        newData = data.At - num;
        if (newData < 0) newData = 0;
        const level = levelCal(newData);
        await patchToArray(
          req.params.discordId,
          {
            AT: newData,
            Level: level,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
      case "Rd":
        newData = data.Rd - num;
        await patchToArray(
          req.params.discordId,
          {
            RD: newData,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
      case "Ww":
        newData = data.Workweek - num;
        if (newData < 0) newData = 0;
        await patchToArray(
          req.params.discordId,
          {
            WW: newData,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
      case "Ticket":
        newData = data.Ticket - num;
        if (newData < 0) newData = 0;
        await patchToArray(
          req.params.discordId,
          {
            Ticket: newData,
          },
          "1RTJFmyNgfNg_hkZ1xnNcjioYFUh6vbWuVpGTGdoYsTU",
          0
        );
        break;
    }
    return res.status(200).send("Updated successfully");
  } else {
    return res.status(404).send("Unknow Interaction");
  }
};
