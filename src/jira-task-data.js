// https://github.com/VovanR/v-index-bookmarklet/blob/master/dist/bookmarklet.js
// https://github.com/VovanR/css-diagnostics-bookmarklet
// https://github.com/hootstheowl/bookmarklet-loader/blob/master/index.js
// https://docs.atlassian.com/aui/7.9.5/docs/flag.html

(function({ JIRA, AJS, location }) {
  const id = JIRA.Issue.getIssueKey();

  AJS.flag({
    title: id + ": " + document.getElementById("summary-val").innerText,
    body: location.origin + "/browse/" + id
  });
})(window);
