const fs = require('fs');
const path = require('path');

// 获取当前脚本的路径
const currentDir = path.dirname(__filename);

const sslKeyPath = path.join(currentDir, 'key.pem');
const sslCertPath = path.join(currentDir, 'cert.pem');

module.exports = {
    key: fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslCertPath),
};
