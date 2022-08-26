<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension">
    <img src="public/icons/jsonld-logo-128x128.png" alt="Logo" width="128" height="128">
  </a>

  <h3 align="center">JSON-LD Viewer Chrome Extension</h3>

  <p align="center">
    A Google Chrome Extension that displays a preview of the JSON-LD content of the active webpage.
    <br />
    <a href="https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://chrome.google.com/webstore/detail/microdatajson-ld-sniffer/djgonlcfpeeddedjhpgijdckhgddcfgf">Add to Chrome</a>
    ·
    <a href="https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/issues">Report Bug</a>
    ·
    <a href="https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/issues">Request Feature</a>
  </p>

  [![Version][version-shield]][version-url]
  [![Chrome Rating][chrome-extension-shield]][chrome-extension-url]
  [![Issues][issues-shield]][issues-url]
  [![Contributors][contributors-shield]][contributors-url]
  [![Stargazers][stars-shield]][stars-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<br/>
<div align="center">
  <img src="public/images/jsonld-viewer-screenshot.png" alt="Example Screenshot" title="Example Screenshot">
</div>
<br/>

This Google Chrome Extension was formed through my overuse of checking the JSON-LD content of other websites as well as my own. I had to continuously open Developer Tools, switch to the Elements tab, search for `application/json+ld` and then copy out the JSON-LD content to review in a code editor.

This process grew frustrating with each iteration and I decided to make my life easier by creating this extension that allows you to view the JSON-LD content of a webpage in a popup without needing to open Developer Tools at all. 

This has been both a fun learning process, as it's my first interaction with the Google Chrome Extensions API, and a great way to resolve a tedious, repetitive development process.

I hope this extension is as helpful for you as it has been for me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Laravel][Laravel.com]][Laravel-url]
* [![TypeScript][Typescript.com]][Typescript-url]
* [![SASS][SASS.com]][SASS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these instructions to set up the extension either via the Chrome Web Store or built locally from your machine.

### Install via Chrome Web Store
1. Open the extension in the Chrome Web Store [here][chrome-extension-url]
2. Click "Add to Chrome"

### Build it yourself

1. Clone the repo
   ```
   git clone https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Build the extension
   ```
   npm run production
   ```
4. Open Chrome and head to [chrome://extensions/][chrome-url]
5. Enable "Developer Mode"
6. Click "Load unpacked extension"
7. Select the "dist" folder

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After this extension has been added to chrome, there is no further set up required. Whenever you open a new tab and click on the extension icon from your extensions bar, the popup will appear with the JSON-LD content of the active page.

You can then browse through the content using the embedded JSON viewer, or copy the JSON-LD content and review it in another application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- View the JSON-LD of the active webpage cleanly ✅
- Copy the JSON-LD of the activer webpage ✅
- Add welcome page that opens on extension install
- Localisation + Internationalisation
- Links from JSON-LD content to JSON-LD definitions

See the [open issues][issues-url] for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'Added a new feature'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request

<br/>
<div align="center">
  <a href="https://www.buymeacoffee.com/kingsthwaiteJ" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Font Awesome](https://fontawesome.com) for providing their awesome icons
* [json-viewer-js](https://www.npmjs.com/package/json-viewer-js) for creating and maintaining an awesome JSON viewer

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kingsthwaiteJ/jsonld-viewer-chrome-extension?style=for-the-badge
[contributors-url]: https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/graphs/contributors
[version-shield]: https://img.shields.io/github/package-json/v/kingsthwaiteJ/jsonld-viewer-chrome-extension?style=for-the-badge
[version-url]: https://github.com/kingsthwaiteJ/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/kingsthwaiteJ/jsonld-viewer-chrome-extension?style=for-the-badge
[stars-url]: https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/stargazers
[issues-shield]: https://img.shields.io/github/issues/kingsthwaiteJ/jsonld-viewer-chrome-extension?style=for-the-badge
[issues-url]: https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/issues
[license-shield]: https://img.shields.io/github/license/kingsthwaiteJ/jsonld-viewer-chrome-extension?style=for-the-badge
[license-url]: https://github.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kingsthwaiteJ
[product-screenshot]: https://raw.githubusercontent.com/kingsthwaiteJ/jsonld-viewer-chrome-extension/main/public/images/jsonld-viewer-screenshot.PNG
[Typescript.com]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://typescriptlang.com
[SASS.com]: https://img.shields.io/badge/SASS-BF4080?style=for-the-badge&logo=sass&logoColor=white
[SASS-url]: https://sass-lang.com
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[chrome-url]: chrome://extensions/
[chrome-extension-url]: https://chrome.google.com/webstore/detail/microdatajson-ld-sniffer/djgonlcfpeeddedjhpgijdckhgddcfgf
[chrome-extension-shield]: https://img.shields.io/chrome-web-store/rating/1?style=for-the-badge