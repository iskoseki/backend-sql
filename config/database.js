module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_bd'),
      user: env('DATABASE_USERNAME', 'Strapiadmin'),
      password: env('DATABASE_PASSWORD', 'Mayorista@2021'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
