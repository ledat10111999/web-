var bcrypt = require ('bcrypt');
var config = require('config');

function hash_password (pass){
   
   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(pass, salt);

   return hash;
}
function check_password(pass,hash)
{
  return bcrypt.compareSync(pass, hash); // true
}
module.exports= { 
   
   hash_password : hash_password,
   check_password : check_password
};