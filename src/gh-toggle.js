// https://jsfiddle.net/VovanR/2Lhsw69r/
// https://codepen.io/VovanR/pen/Lqgewm

(function ({ location: { href } }) {
  if (/vovanr\.com/.test(href)) {
    href = href.replace("vovanr.com", "vovanr.github.io");
  }

  const u = new URL(href);

  let result = "https://";
  let user;
  let project;

  if (/github\.io/.test(href)) {
    user = u.hostname.split(".github")[0];
    project = u.pathname.split("/")[1];
    result += "github.com/" + user + "/" + project;
  } else {
    user = u.pathname.split("/")[1];
    project = u.pathname.split("/")[2];
    result += user + ".github.io/" + project;
  }

  location.href = result;
})(window);
