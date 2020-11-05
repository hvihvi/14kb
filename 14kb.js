#! /usr/bin/env node
console.log("running 14kb check");

const request = require("request");

request({
    url: "https://www.lesfurets.com",
    method: "GET"
}, (err, response, body) => {
    console.log(response.headers)
});