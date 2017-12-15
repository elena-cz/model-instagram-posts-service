const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV]);
const bookshelf = require('bookshelf')(knex);

module.exports.knex = knex;
module.exports.bookshelf = bookshelf;
