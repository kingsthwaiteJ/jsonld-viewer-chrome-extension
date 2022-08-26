// Import Dependencies
import JsonViewer from "json-viewer-js";

// Initialise DOM references
const viewerDiv = document.getElementById('jsonld-viewer');
const viewerContainer = document.getElementById('jsonld-viewer-container');

/**
 * Retrieves the JSON-LD content of the active page if any is available
 * @returns The JSON-LD content of the active page or `null`
 */
function retrieveJsonld() {
    console.log('Retrieving jsonld content ...');
    let jsonld = document.querySelector('script[type="application/ld+json"]');
    if (jsonld) {
        return jsonld.innerHTML;
    } else {
        return null;
    }
}

/**
 * Loads the active page's JSON-LD into the popup and initialises the JSON viewer
 * @param tabID The ID of the active tab
 * @param theme The browser's default theme
 */
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
                        openButton?.addEventListener('click', async () => {
                            // const newTab = window.open("data:text/json," + encodeURIComponent(jsonld), "_blank");
                            // newTab?.focus();

                            const blob = new Blob([jsonld], { type: 'application/json' });
                            const url = window.URL.createObjectURL(blob);
                            window.open(url, '_blank');
                        });

                        let copyButton = document.getElementById('copyToClipboard');
                        const copyButtonContent = copyButton.innerHTML;
                        copyButton?.addEventListener('click', () => {
                            navigator.clipboard.writeText(jsonld);
                            copyButton.innerHTML = 'Copied <i class="fa-solid fa-check"></i>';
                            setTimeout(() => {
                                copyButton.innerHTML = copyButtonContent;
                            }, 1500);
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
            if (viewerContainer) {
                viewerContainer.style.marginTop = "20px";
                viewerContainer.style.marginBottom = "10px";
            }
            if (viewerDiv) {
                viewerDiv.innerHTML = '<p class="is-centered">JSON-LD is not available on this page.</p>';
            }
            let buttonDiv = document.getElementById("buttonContainer");
            if (buttonDiv) {
                buttonDiv.style.display = "none";
            }
        }
    });
}

/**
 * Retrieves the active tab to be referenced when loading the JSON-LD content
 * @returns The active tab
 */
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

/**
 * Initialisation function that's called when the popup window is triggered by the user
 */
async function run() {
    // Determine which viewer theme to use
    let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Load the JSON-LD of the active page
    const currentTab = await getCurrentTab();
    await loadJsonld(currentTab.id, darkMode ? 'dark' : 'light');
}

run();