(function (l) {
  l.href = l.protocol + "//" + l.host.replace(/.+?\./, "") + l.pathname;
})(window.location);
