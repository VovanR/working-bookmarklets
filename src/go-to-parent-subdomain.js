(function(l) {
  l.href = l.protocol + "//" + l.hostname.replace(/.+?\./, "");
})(window.location);
