const MONGODB_URL =
  'mongodb+srv://JetRuby:JetRuby@gittrends.lsctuyi.mongodb.net/';
const PORT = 3000;

const CREATED_CODE = 201;
const NOT_FOUND_ERROR_CODE = 404;
const SERVER_ERROR_CODE = 500;

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
};

module.exports = {
  MONGODB_URL,
  PORT,
  corsOptions,
  CREATED_CODE,
  NOT_FOUND_ERROR_CODE,
  SERVER_ERROR_CODE,
};
