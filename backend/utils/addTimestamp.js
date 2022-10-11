const express = require('express');

function addTimestamp(obj) {
  const date = new Date();
  obj.timestamp = date.toString();
  return obj;
}

module.exports = { addTimestamp };
