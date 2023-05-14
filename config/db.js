const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://kiruthi:QOn2WHGhQUlFENZY@cluster0.izxvcjx.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected");
    } catch (error) {
        console.log("Database connection failed ", error);
        process.exit(1);
    }
};

module.exports = connectDatabase;