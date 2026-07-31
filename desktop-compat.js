(function () {
  "use strict";

  window.__MINIFARM_ERRORS = [];

  window.addEventListener("error", function (event) {
    window.__MINIFARM_ERRORS.push({
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno
    });
  });

  window.addEventListener("unhandledrejection", function (event) {
    window.__MINIFARM_ERRORS.push({
      message: String(event.reason && event.reason.stack || event.reason)
    });
  });

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function (event) {
    var key = String(event.key || "").toLowerCase();
    var openDevTools = key === "f12" ||
      (event.ctrlKey && event.shiftKey && key === "i");
    if (openDevTools && window.desktopTools) {
      event.preventDefault();
      window.desktopTools.openDevTools();
    }
  });

  window.addEventListener("load", function () {
    var canvas = document.getElementById("GameCanvas");
    if (canvas) {
      canvas.focus();
    }
  });
}());
