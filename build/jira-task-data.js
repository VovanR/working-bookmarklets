javascript:!function({JIRA:JIRA,AJS:AJS,location:location}){const id=JIRA.Issue.getIssueKey(),title=id+": "+document.getElementById("summary-val").innerText,url=location.origin+"/browse/"+id,style="font-family: monospace; box-sizing: border-box; width: 100%; resize: none;",flag=AJS.flag({body:`<div><textarea style="${style}" rows="2">${title}\n${url}</textarea><input value="${url}" style="${style}"/><input value="${id}" style="${style}"/></div>`});function copy({target:target}){target.select(),document.execCommand("copy")}flag.querySelector("textarea").addEventListener("click",copy),flag.querySelectorAll("input").forEach((el=>el.addEventListener("click",copy)))}(window);void(0);