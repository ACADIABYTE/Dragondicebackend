module.exports = cal = (nowAt) => {
  let Level = 1;
  if (nowAt >= 2) {
    Level = 2;
  }
  if (nowAt >= 10) {
    Level = 3;
  }
  if (nowAt >= 22) {
    Level = 4;
  }
  if (nowAt >= 38) {
    Level = 5;
  }
  if (nowAt >= 50) {
    Level = 6;
  }
  if (nowAt >= 62) {
    Level = 7;
  }
  if (nowAt >= 74) {
    Level = 8;
  }
  if (nowAt >= 86) {
    Level = 9;
  }
  if (nowAt >= 98) {
    Level = 10;
  }
  if (nowAt >= 114) {
    Level = 11;
  }
  if (nowAt >= 126) {
    Level = 12;
  }
  if (nowAt >= 138) {
    Level = 13;
  }
  if (nowAt >= 150) {
    Level = 14;
  }
  if (nowAt >= 162) {
    Level = 15;
  }
  if (nowAt >= 178) {
    Level = 16;
  }
  if (nowAt >= 190) {
    Level = 17;
  }
  if (nowAt >= 202) {
    Level = 18;
  }
  if (nowAt >= 214) {
    Level = 19;
  }
  if (nowAt >= 230) {
    Level = 20;
  }
  return Level;
};
