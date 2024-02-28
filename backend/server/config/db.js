const mong = require('mongoose');
require('dotenv').config();

// connection
const conn = async () => {
    try {
        await mong.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('MongoDB connected succesfully');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = conn;