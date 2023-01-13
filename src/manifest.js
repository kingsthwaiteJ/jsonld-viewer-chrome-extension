
module.exports = {
	name: 'Linked-Data Viewer',
	version: '0.1.4',
	description: 'A Google Chrome extension to view the linked-data data for the active webpage.',
	author: 'James Kingsthwaite',
	manifest_version: 3,

	icons: {
		16: 'icons/jsonld-logo-16x16.png',
		24: 'icons/jsonld-logo-24x24.png',
		32: 'icons/jsonld-logo-32x32.png',
		48: 'icons/jsonld-logo-48x48.png',
		128: 'icons/jsonld-logo-128x128.png'
	},

	action: {
        default_icon: {
            16: "icons/jsonld-logo-16x16.png",
            24: "icons/jsonld-logo-24x24.png",
            32: "icons/jsonld-logo-32x32.png",
            48: "icons/jsonld-logo-48x48.png",
            128: "icons/jsonld-logo-128x128.png"
        },
        default_title: "Jsonld Viewer 🔍",
        default_popup: "pages/popup.html"
    },

	permissions: [
		'activeTab',
		'tabs',
		'scripting'
	],
	host_permissions: [
		"*://developer.mozilla.org/*", 
		"*://*/*"
	],
	// browser_action: {
	// 	default_title: 'Jsonld Viewer',
	// 	default_popup: 'pages/popup.html'
	// },
	// background: {
	// 	persistent: false,
	// 	page: 'pages/background.html'
	// },
	devtools_page: 'pages/devtools.html',
	options_page: 'pages/options.html',
	// content_scripts: [{
	// 	js: ['js/inject.js'],
	// 	run_at: 'document_end',
	// 	matches: ['<all_urls>'],
	// 	all_frames: true
	// }],
	// content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
}
