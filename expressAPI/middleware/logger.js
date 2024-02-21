const LogSchema = require("../models/LogSchema");

const logger = async (req, res, next) => {
    const timestmp = new Date().toLocaleDateString("da-DK");
    res.on("finish", async () => {
        console.log(`${timestmp} - ${req.method} : ${req.url} - ${res.statusCode} ${res.statusMessage}`);
        const newLog = new LogSchema({
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            statusMessage: res.statusMessage
        });
        await newLog.save();
    });
    
    next();
}



module.exports = logger;