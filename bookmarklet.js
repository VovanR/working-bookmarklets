javascript: !(function() {
  var e = JIRA.Issue.getIssueKey();
  AJS.flag({
    title: e + ": " + document.getElementById("summary-val").innerText,
    body: window.location.origin + "/browse/" + e
  });
})();
void 0;
