// importing the mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sranjay15:rrRR9006@cluster0.qtfo7fo.mongodb.net/?retryWrites=true&w=majority');
  console.log('Successfully connected to::MONGO DB')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}