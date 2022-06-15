const csvFilePath = './2012DomainRanking.csv'
const csv = require('csvtojson');
const fs = require('fs');


csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync("./2012Domain.json", JSON.stringify(jsonObj, null, 4));
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
    })