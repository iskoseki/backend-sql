module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '117ab9f7e1f81376efcb18f5dbdbee50'),
  },
});
