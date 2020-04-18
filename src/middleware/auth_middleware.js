
const jwtHelper = require("../helpers/jwt");
const debug = console.log.bind(console);

const SECRET_KEY  = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqGKukO1De7zhZj6+H0qtjTkVxwTCpvKe4eCZ0FPqri0cb2JZfXJ/DgYSF6vUpwmJG8wVQZKjeGcjDOL5UlsuusFncCzWBQ7RKNUSesmQRMSGkVb1/3j+skZ6UtW+5u09lHNsj6tQ51s1SPrCBkedbNf0Tp0GbMJDyR4e9T04ZZwIDAQAB"


let isAuth = async (req, res, next) => {
  let tokenFromClient =  req.query.token || req.headers["authorization"]

  if(tokenFromClient != null && tokenFromClient.startsWith('Bearer ')){
    tokenFromClient = tokenFromClient.slice(7,tokenFromClient.length);
  }
  if (tokenFromClient) {
    try {
      const decoded = await jwtHelper.verifyToken(tokenFromClient, SECRET_KEY);
      req.userId = decoded.data.userId;
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Unauthorized.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
}

module.exports = {
  isAuth: isAuth,
};
