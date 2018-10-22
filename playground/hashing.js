const {SHA256} = require ('crypto-js');
const jwt = require('jsonwebtoken');

// //==================HASHING================
// var message = 'Iam user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);

// var data = {
//     id : 4
// };
// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'secret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();
// if (resultHash === token.hash) {
//     console.log('Data wasnot change');
    
// } else {
//     console.log('Data was changed, do not trust');
    
// }

// ==================JWT=================
var data = {
    id : 10  //dinamakan payload
};
var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
