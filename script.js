"use strict";
function objectToString(obj) {
  let msg = "";
  if (typeof obj !== "object") {
    return obj;
  } else if (Array.isArray(obj)) {
    if (typeof obj[0] !== "object") {
      return obj;
    } else {
      for (const objElement of obj) {
        msg += objectToString(objElement) + "\n";
      }
      msg = msg.slice(0, msg.length - 1);
    }
  } else {
    msg += "{";
    for (const key in obj) {
      msg += key + ":" + obj[key] + ",\n";
    }
    msg = msg.slice(0, msg.length - 2) + "}";
  }
  return msg;
}

console._log = console.log;
console.log = function () {
  const outputP = document.querySelector("p");

  outputP.innerText += objectToString(arguments[0]) + "\n";
  console._log.apply(null, arguments);
};
