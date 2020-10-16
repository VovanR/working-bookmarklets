(function (l) {
  let newPath = l.pathname.split("/");

  if (newPath.pop() === "") {
    newPath.pop();
  }

  l.href = l.protocol + "//" + l.host + newPath.join("/");
})(window.location);
