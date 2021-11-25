// https://github.com/VovanR/css-diagnostics-bookmarklet

(function (d) {
  var content = d.createTextNode(`

[data-id] {
  outline: 2px solid lime;
}

  `);

  var styleNode = d.createElement("style");
  styleNode.append(content);
  d.head.append(styleNode);
})(document);
