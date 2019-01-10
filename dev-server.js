/* 将libs做为本地启动的服务 */

const express = require('express');
const path = require('path');
const app = express();
// 获取本机ip
const Ip = require('ip').address();
// 自动打开浏览器
const open = require('opn');

app.use(express.static(path.join(__dirname, './libs')));

var server = app.listen(7000, function() {
    var port = server.address().port;
    var url = `http://${Ip}:${port}`;
    console.log(`${url}服务已启动！`)
    open(url);
})
