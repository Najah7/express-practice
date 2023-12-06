const axios = require('axios').default;

const IMAGE_SIZE = 300;
const TARGET_URL = 'https://api.qrserver.com/v1/create-qr-code/';

const fetchQR = async (data) => {
    let html;
    try {
        const response = await axios.get(TARGET_URL + `?size=${IMAGE_SIZE}x${IMAGE_SIZE}&data=${data}`, {
            responseType: 'arraybuffer'
        });
        const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
        const imageSrc = `data:image/png;base64,${imageBase64}`; 
        return generateHTML(imageSrc, data);
    } catch (error) {
        console.log("Error fetching QR code");
        console.log(error);
        html = '<h1>Something went wrong</h1>'
    }
    return 
}

// HACk: use view/xxxx.jade. I don't have time to implement it now
const generateHTML = (imageSrc, data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- centering -->
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            span {
                color: red;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>QR Code</h1>
        <p> we are generating a QR code for <span>${data}</span></p>
        <img src="${imageSrc}" alt="QR Code">
    </body>
    </html>`;
}

module.exports = {
    fetchQR
}