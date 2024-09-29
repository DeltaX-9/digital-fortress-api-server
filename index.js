const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});

// // Node.js code to act as a proxy
// const express = require('express');
// const axios = require('axios');
// const https = require('https');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// const port = 3000;

// // Custom https agent to handle TLS settings (optional)
// const agent = new https.Agent({
//     rejectUnauthorized: false // This skips certificate validation, not recommended for production
//   });
  
  
//   app.get('/proxy', async (req, res) => {
//     try {
//       const response = await axios({
//         method: 'get',
//         url: 'https://threatmap-api.checkpoint.com/ThreatMap/api/feed',
//         headers: {
//           'accept': 'text/event-stream',
//           'accept-language': 'en-US,en;q=0.9,en-IN;q=0.8',
//           'cache-control': 'no-cache',
//           'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
//           'sec-ch-ua-mobile': '?0',
//           'sec-ch-ua-platform': '"Linux"',
//           'sec-fetch-dest': 'empty',
//           'sec-fetch-mode': 'cors',
//           'sec-fetch-site': 'same-site',
//           'Referer': 'https://threatmap.checkpoint.com/',
//           'Referrer-Policy': 'strict-origin-when-cross-origin'
//         },
//         httpsAgent: agent, // Custom agent for https requests
//         responseType: 'stream' // To pipe the data back as a stream
//       });
  
//       // Accumulate chunks of data
//       let data = '';
  
//       response.data.on('data', (chunk) => {
//         data += chunk.toString();
  
//         // Find the JSON part of the chunk
//         const jsonMatches = data.match(/{[^}]*}/g);
//         if (jsonMatches) {
//           jsonMatches.forEach((jsonString) => {
//             try {
//               const parsedData = JSON.parse(jsonString);
//               console.log(parsedData); // Print the parsed JSON to the console
//             } catch (error) {
//               console.error('Error parsing JSON:', error.message);
//             }
//           });
//         }
  
//         // Clean up the data after parsing to avoid duplicates
//         data = '';
//       });
  
//       response.data.pipe(res);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       res.status(500).send('Error fetching data');
//     }
//   });
// app.listen(port, () => {
//   console.log(`Proxy server running at http://localhost:${port}`);
// });
