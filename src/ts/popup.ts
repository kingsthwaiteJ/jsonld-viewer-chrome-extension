import JsonViewer from "json-viewer-js";
const viewerDiv = document.getElementById('jsonld-viewer');

function retrieveJsonld() {
    console.log('Retrieving jsonld content ...');
    let jsonld = document.querySelector('script[type="application/ld+json"]');
    if (jsonld) {
        return jsonld.innerHTML;
    } else {
        return null;
    }
}

async function loadJsonld(tabID, theme) {
    return await chrome.scripting.executeScript({
        target: { tabId: tabID },
        func: retrieveJsonld
    }, (injectionResults) => {
        try {
            console.log(injectionResults);
            if (injectionResults) {
                if (injectionResults.length > 0) {
                    if (injectionResults[0].result) {
                        const jsonld = injectionResults[0].result;
                        // Create the viewer with the jsonld content
                        new JsonViewer({
                            container: viewerDiv,
                            data: jsonld,
                            theme: theme,
                            expand: true
                        });

                        // Open the JSON-LD content in a new page if it's available, otherwise hide the button
                        let openButton = document.getElementById("openInNewTab");
                        openButton?.addEventListener('click', () => {
                            const newTab = window.open("data:text/json," + encodeURIComponent(jsonld), "_blank");
                            newTab?.focus();
                        });
                    } else {
                        throw 'JSON-LD not available';
                    }
                } else {
                    throw 'JSON-LD not available';
                }
            } else {
                throw 'JSON-LD not available';
            }
        } catch(error) {
            console.log(error);
            if (viewerDiv) {
                viewerDiv.innerHTML = '<p class="is-centered">No JSON-LD available on this page.</p>';
            }
            let openButton = document.getElementById("openInNewTab");
            if (openButton) {
                openButton.style.display = "none";
            }
        }
    });
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function run() {
    // Determine which viewer theme to use
    let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Load the JSON-LD of the active page
    const currentTab = await getCurrentTab();
    await loadJsonld(currentTab.id, darkMode ? 'dark' : 'light');
}

run();