const { getAll, getOne } = require("./get");
const { patchGeneral, addOrRemove } = require("./patch");
const { deleteOne } = require("./delete");
const post = require("./post");

exports.getAll = getAll;

exports.patchGeneral = patchGeneral;

exports.addOrRemove = addOrRemove;

exports.deleteOne = deleteOne;

exports.getOne = getOne;

exports.create = post;
