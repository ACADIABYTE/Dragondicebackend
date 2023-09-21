const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

const KEY = require("../../key");
module.exports = getSheetData = async (sheetId, sheetIndex) => {
  const serviceAccountAuth = new JWT({
    email: KEY.data.client_email,
    key: KEY.data.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(
    sheetId,
    serviceAccountAuth
  );
  await doc.loadInfo();
  const sheet = await doc.sheetsByIndex[sheetIndex];
  return sheet;
};
