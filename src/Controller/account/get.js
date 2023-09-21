const {extractToArrayAccount} = require("../../Util/database");

exports.getAll = async (req, res) => {
  const result = await extractToArrayAccount(
    "1BxhCb8IvM3RiK6RQGTHqvDENk-EI71LcNsmcXUP9N4k",
    0
  );
  res.json(result);
};

exports.getOne = async (req, res) => {
  const sheet = await extractToArrayAccount(
    "1BxhCb8IvM3RiK6RQGTHqvDENk-EI71LcNsmcXUP9N4k",
    0
  );
  let data = null;
  result.map((i) => {
    if (i.DiscordId !== req.params.discordId) {
      return;
    } else {
      data = i;
    }
  });

  if (data === null) {
    return res.status(404).send("Account not found");
  }
  res.json(data);
};
