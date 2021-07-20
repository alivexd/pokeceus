const db = require("quick.db")

module.exports.run = (client) => {
  console.log("I am ready" )
  client.user.setActivity(db.get(`status`)); 
}