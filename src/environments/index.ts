export default {
  env: process.env.NODE_ENV,
  host: process.env.HOST_NAME,
  port: parseInt(process.env.PORT || '')
};
