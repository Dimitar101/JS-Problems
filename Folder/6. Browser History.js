function solve(browserHistory, commands) {

    for (const command of commands) {
        let [action, website] = command.split(' ');

        if (action == 'Open' && !browserHistory['Open Tabs'].includes(website)) {
            // remove from Recently Closed ??
            browserHistory['Open Tabs'].push(website);
            browserHistory['Browser Logs'].push(command);
        }
        else if (action == 'Close' && browserHistory['Open Tabs'].includes(website)) {
            let idx = browserHistory['Open Tabs'].indexOf(website)
            browserHistory['Open Tabs'].splice(idx, 1);

            browserHistory['Recently Closed'].push(website);
            browserHistory['Browser Logs'].push(command);
        }
        else if (action == 'Clear') {
            browserHistory['Open Tabs'] = [];
            browserHistory['Recently Closed'] = [];
            browserHistory['Browser Logs'] = [];
        }
    }

    console.log(browserHistory['Browser Name']);
    console.log(`Open Tabs: ${browserHistory['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserHistory['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserHistory['Browser Logs'].join(', ')}`);
}



// solve(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

solve(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
