'use strict';

module.exports = envTransports;

function envTransports(winston) {
  return [
    new winston.transports.File({
      name: 'info-file',
      level: 'info',
      filename: './logs/all-logs.log',
      //handleExceptions: true,
      json: true,
      //eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
      maxsize: 5242880, //5MB
      maxFiles: 10,
      colorize: false
    }),
    new winston.transports.File({
      name: 'error-file',
      level: 'error',
      filename: './logs/error-logs.log',
      handleExceptions: true,
      json: true,
      //eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
      maxsize: 5242880, //5MB
      maxFiles: 10,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      //handleExceptions: true,
      json: false,
      colorize: true
    })
  ];
}
