const mongoose = require('mongoose');

let cached = global._mongooseCached;
if (!cached) cached = global._mongooseCached = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_ADDRESS, { bufferCommands: false })
      .then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = dbConnect;