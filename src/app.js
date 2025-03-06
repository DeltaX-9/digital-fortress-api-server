require('dotenv').config();
require("./services/mongo");
const express = require('express');
const { rateLimit } =require('express-rate-limit');
const cors = require('cors');
const useragent = require('useragent');
const geoip = require('geoip-lite');
const app = express();
const logger = require('./services/logger');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('trust proxy')

// Rate Limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
})

app.use(limiter)

// Error Middleware
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something broke!')
})

// app.use((req, res, next) => {
//     // Extract IP from various possible headers or fallback to req.ip
//     const ip = req.headers['x-forwarded-for'] || 
//                req.headers['x-real-ip'] || 
//                req.connection.remoteAddress || 
//                req.socket.remoteAddress || 
//                req.ip;

//     // Parse the user agent for OS and browser information
//     const agent = useragent.parse(req.headers['user-agent']);
//     const os = agent.os.toString();  // Operating System
//     const browser = agent.toAgent();  // Browser

//     // Geolocate the IP
//     const geo = geoip.lookup(ip);
//     const location = geo ? `${geo.city}, ${geo.region}, ${geo.country}` : 'Unknown location';

//     // Extract source domain (Referer or Origin)
//     const referer = req.headers['referer'] || 'Direct Access';  // Referring page
//     const origin = req.headers['origin'] || 'Unknown Origin';   // Origin of the request (for CORS)

//     // Log the information
// 	res.on('finish', () => {
//         const statusCode = res.statusCode;  // Get the response status code
// 		logger.info(`----------------------------------------`);
// 		logger.info(`Request Time: ${new Date().toUTCString()}`);
// 		logger.info(`Request Method: ${req.method}`);
// 		logger.info(`Request URL: ${req.originalUrl}`);
//         logger.info(`Request from IP: ${ip}`);
//         logger.info(`Location: ${location}`);
//         logger.info(`Operating System: ${os}`);
//         logger.info(`Browser: ${browser}`);
//         logger.info(`Source Domain (Referer): ${referer}`);
//         logger.info(`Origin: ${origin}`);
//         logger.info(`Response Status Code: ${statusCode}`);
// 		logger.info(`----------------------------------------`);
//     });
    
//     next();
// });

// Routes
app.use("/search", require('./api/search/routes'));
app.use("/rss-feed", require('./api/rss-feed/routes'));
app.use("/scrapper", require('./api/scrapper/routes'));
app.use("/stats", require('./api/stats/routes'));


module.exports = app;

