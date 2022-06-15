// https://github.com/VovanR/css-diagnostics-bookmarklet

(function (d) {
  var content = d.createTextNode(`

[data-id] {
  outline: 2px solid lime !important;
}

[data-id]::after {
  content: attr(data-id);
  color: lime;
  font-size: 10px;
  text-shadow: 0 1px black;
  width: 0;
}

  `);

  var styleNode = d.createElement("style");
  styleNode.append(content);
  d.head.append(styleNode);
})(document);
