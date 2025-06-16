// Import Dependencies
import JsonViewer from "json-viewer-js";

// Initialise DOM references
const viewerDiv = document.getElementById('jsonld-viewer');
const viewerContainer = document.getElementById('jsonld-viewer-container');

/**
 * Retrieves the JSON-LD content of the active page if any is available
 * @returns The JSON-LD content of the active page or `null`
 */
function retrieveLinkedData() {
    console.log('Retrieving linked-data content ...');

    // Attempt to retrieve json-ld if it's available
    let jsonld = document.querySelector('script[type="application/ld+json"]');
    if (jsonld) {
        return jsonld.innerHTML;
    }

    // Attempt to retrieve microdata if it's available
    let microdataElements = document.querySelectorAll('*[itemScope]');
    if (microdataElements) {
        // Reformat the microdata for presentation

    }

    // Attempt to retrieve RDFa if it's available
    

    return null;
}

/**
 * Loads the active page's JSON-LD into the popup and initialises the JSON viewer
 * @param tabID The ID of the active tab
 * @param theme The browser's default theme
 */
async function loadJsonld(tabID, theme) {
    return await chrome.scripting.executeScript({
        target: { tabId: tabID },
        func: retrieveLinkedData
    }, (injectionResults) => {
        try {
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
 * Determines the tab that is active in the popup window
 */
function initialiseTabs(defaultTabName: string) {
    const tabs = document.getElementsByClassName('tablinks');
    for (let tab of tabs) {
        console.log(tab);
        tab.addEventListener('onclick', (event) => {
            console.log(event);
            openTab(tab, tab.textContent);
        });

        if (tab.textContent == defaultTabName) {
            openTab(tab, tab.textContent);
        }
    }
}

/**
 * Handles the opening and closing of tabs upon tab selection
 * @param targetButton The button (tab button) that was clicked
 * @param tabId The id of the tab that should be opened
 */
function openTab(targetButton, tabId) {
    const tabContents = document.getElementsByClassName("tabcontent");
    for (let tabContent of tabContents) {
        tabContent.classList.remove('is-active');
    }

    const targetTab = document.getElementById(tabId);
    targetTab.classList.add('is-active');

    const tabLinks = document.getElementsByClassName("tablinks");
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('is-active');
    }

    targetButton.classList.add('is-active');
}

/**
 * Initialisation function that's called when the popup window is triggered by the user
 */
async function run() {
    // Determine which viewer theme to use
    let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Opens the default tab
    initialiseTabs('Settings');

    // Load the JSON-LD of the active page
    const currentTab = await getCurrentTab();
    await loadJsonld(currentTab.id, darkMode ? 'dark' : 'light');
}

run();