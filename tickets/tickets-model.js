const db = require('../data/dbConfig');

const get = async () => {
  return await db('tickets');
}

const getBy = async (filter) => {
  return await db('tickets').where(filter).first();
}

module.exports = {
  get,
  getBy
}