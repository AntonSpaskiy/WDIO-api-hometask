const testData = require("../config/data.json");

class functions {
       
    userEmail() {
        const getRandomNum = Math.random().toString().slice(-3);
        return `antontest+${getRandomNum}@gmail.com`;
        };
};

module.exports = new functions();