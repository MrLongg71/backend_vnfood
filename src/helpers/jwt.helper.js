const jwt = require("jsonwebtoken");

let generateToken = (user,secretSignature,tokeLife) =>{
    return new Promise((resolve,reject) =>{
        const userData = {
            _id: user._id,
            email: user.email,
        }
        jwt.sign(
            {data: userData},
            secretSignature,
            {
              algorithm: "HS256",
              expiresIn: tokenLife,
            },
            (error, token) => {
              if (error) {
                return reject(error);
              }
              resolve(token);
          });
        });
      
}
module.exports = {
    generateToken: generateToken,
  };