const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const https = require('https');
const sslOptions = require('./config/ssl');
const app = require('./app');
const logger = require('./utils/logger');

if (cluster.isMaster) {
  logger.info(`主进程 ${process.pid} 正在运行`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    logger.info(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  const PORT = process.env.PORT || 8443;
  https.createServer(sslOptions, app).listen(PORT, () => {
    logger.info(`工作进程 ${process.pid} 正在监听端口 ${PORT}`);
  });
}
