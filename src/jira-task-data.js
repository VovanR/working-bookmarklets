// https://github.com/VovanR/v-index-bookmarklet/blob/master/dist/bookmarklet.js
// https://github.com/VovanR/css-diagnostics-bookmarklet
// https://github.com/hootstheowl/bookmarklet-loader/blob/master/index.js
// https://docs.atlassian.com/aui/7.9.5/docs/flag.html

(function({ JIRA, AJS, location }) {
  const id = JIRA.Issue.getIssueKey();
  const name = document.getElementById("summary-val").innerText;

  const title = id + ": " + name;
  const url = location.origin + "/browse/" + id;

  const style =
    "font-family: monospace; box-sizing: border-box; width: 100%; resize: none;";

  const flag = AJS.flag({
    body: `<div><textarea style="${style}" rows="2">${title}
${url}</textarea><input value="${url}" style="${style}"/><input value="${id}" style="${style}"/></div>`
  });

  flag.querySelector("textarea").addEventListener("click", copy);
  flag
    .querySelectorAll("input")
    .forEach(el => el.addEventListener("click", copy));

  function copy({ target }) {
    target.select();
    document.execCommand("copy");
  }
})(window);
