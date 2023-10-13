# SImas's Personal Website - Testing

![amiresponsive-picture](https://ui.dev/amiresponsive?url=https://simasjakubenas.github.io/blackjack-milestone-p2/)

Visit the deployed site: [Simo's Blackjack](https://simasjakubenas.github.io/blackjack-milestone-p2/)

## CONTENTS

* [Automated Testing](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Jshint validator](#jshint-validator)
  * [Lighthouse](#lighthouse)
* [Accessibility Testing](#accessibility-testing)
* [Reponsive Testing](#reponsive-testing)
* [Manual Testing](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

### Automated Testing 

#### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML and CSS.

HTML - passed.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/70221786-baa6-4cb7-b947-26c225cd7bc9)

CSS - passed.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/fd89e059-6410-45cd-8f5e-a7c878d648f4)

#### Jshint Validator

After running Jshint validator I get these results:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/6cce5f90-8d9a-4275-b819-af17b71b2321)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/48b46bc8-b7e4-4113-a182-4b21b26de6c4)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/6e6e25c4-6fef-412d-9bd6-3ac8983965dd)

#### Lighthouse

For mobile:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/7a485ba9-2521-47d1-b004-e7bec85e3a5b)

Beest practices score is being brought down by the logo on the table. It's opacity is lowered deliberately to give it a more realistic look.

For desktop: 

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/2c964562-8ae8-4828-b04e-3805fe6b8fd1)

### Accessibility Testing

Wave report for the website: 

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/ffe5c284-5e9c-4bdc-a931-cbd70a5760e4)

Contrast check for bright text on dark background:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/4bed92e7-8e2b-48f8-94d8-559839cdf737)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/57b805aa-a92a-4e32-b13a-28b0c6aeb2a0)

Contrast check for bright text on red background:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/5ff204d3-e142-4e17-a1a5-454a66a46929)

Contrast check for dark text on bright background:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/64f8ae08-0368-4991-be2e-e3cc845ea4b7)

### Reponsive Testing

The website was responsive accross all devices tested screen width as little as 280px and as high as 4k.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/0f23f917-13a3-4c74-9563-9b1b59f558d3)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/01c016d6-3fbd-4569-9396-4a3bd18c72bd)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/0ca78aef-b7ba-4fd8-a981-b002518aabc2)

### Manual Testing

Game mechanics and logic was tested extensively throughout development and works the way I intended. Some outcomes are very rare and I had to change temporarily the type of cards were being drawn to test those outcomes.

#### Testing user Stories

Testing User stories was build into the development of the website. The requirement/feature sets were extracted from the user storries in the scope plane of the README.md and features of the website were numbered in correspondance with that (see Features in README.md). All the user stories were adressed in either current or future releases.

#### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Asus N53J 15.6"
* Mobile Device:
  * Samsung S20 FE

The website was tested on the following browsers:

* Google Chrome
* Opra
* Firefox
* Edge

Header

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| logo | clicked logo | should refresh page | does refresh page | Pass |
| menu 'gear' icon | clicked icon |Should open menu | does open menu | Pass |
| x to lose menu | clicked x | shuld close menu | does close menu | Pass |
| left arrow in menu | clicked on arrow | should bring back to menu list | does that | Pass |
| menu list items | clicked | should open relevant pages | does that | Pass |

Main game area 

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| hand counter | played many hands :) | should go up by 1 after bet button is pressed | goes up by when one hand is played | Pass |
| name in layer info table | entered name on a greeting input | appear on the table | does that | Pass |
| balance | playing number of hands | is adjusted based on game outcome | works perfect | Pass |
| deal button | pressed the button | start the game | the cards are dealt and game starts | Pass |
| reset button | pressed the button | resets the bet | does that | Pass |
| double | pressed the button | should draw one card and pass the turn to dealer | does that | Pass | 
| hit button | pressed the button | should draw one card | does that | 
| stand button | presed the button | should pass the turn to dealer | does that and the hand is finished playing automaticly | Pass |
| Bet button | pressed the button | should bring new betting round | does that | Pass |

Footer 

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| GitHub icon | pressed icon | should open my github profile in new window | does that | Paas |
| LinkedIn icon | pressed icon | should open my LinkedIn profile in new window | does that | Paas |