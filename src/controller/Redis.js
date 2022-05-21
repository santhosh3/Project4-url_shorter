
const redis = require("redis");

const redisClient = redis.createClient(
  15760,
  "redis-15760.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
try {
      redisClient.auth("C6tkPD2gghIHsxfHerNMscFiP179E89t")
}
catch(error) {
  console.log(error.message)
}

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});



module.exports = {redisClient}