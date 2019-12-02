// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/database_file.db3'
    },
   migrations: {
     directory: './data/migrations'
   },
   seeds: {
     directory: './data/seeds'
   }
  }
};
