# SImas's Personal Website - Testing

![amiresponsive-picture](https://ui.dev/amiresponsive?url=https://simasjakubenas.github.io/blackjack-milestone-p2/)

Visit the deployed site: [Simo's Blackjack](https://simasjakubenas.github.io/blackjack-milestone-p2/)

Play a fun game of Blackjack! Learn the rules and more about the game. This is quite close to the real deal and in time will be a great platform to improve your performance at the casino tables.

## Contents
[UX Design](#ux-design)
* [The Strategy Plane](#the-strategy-plane)
  * [Problem Statement](#problem-statement)
  * [Competitor Analysis](#competitor-analysis)
    * [Formal online casinos](#formal-online-casinos)
    * [Downloadable games/ individual repositories](#downloadable-games-individual-repositories)
  * [Target Audience](#target-audience)
* [The Scope Plane](#the-scope-plane)
  * [User Stories](#user-stories)
    * [First Time User Goals](#first-time-user-goals)
    * [Returning User Goals](#returning-user-goals)
    * [Site Developer Goals](#site-developer-goals)
    * [Future Development](#future-development)
  * [Content Requirements and Feature Sets](#content-requirements-and-feature-sets)
* [The Structure Plane](#the-structure-plane)
  * [Site Architecture](#site-architecture)
* [The Skeleton Plane](#the-skeleton-plane)
  * [Wireframes](#wireframes)
* [The Surface Plane](#the-surface-plane)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
[Features](#features)
* [Current Features](#current-features)
  * [Greeting Message](#greeting-message)
  * [Header](#header)
  * [Main Game Area](#main-game-area)
  * [Player Info Table](#player-info-table)
  * [Hand Counter](#hand-counter)
  * [Betting Chips](betting-chips)
  * [Betting Buttons](#betting-buttons)
  * [Card Field](#card-field)
  * [Play Buttons](#play-buttons)
  * [Game outcome](#game-0utcome)
  * [Bet Button](#bet-button)
  * [Footer](#footer8)
* [future Features](#future-features)
[Technologies Used](#technologies-used)
* [Languages used](#languages-used)
* [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
[Deployment & Local Development](#deployment--local-development)
* [To deploy using GitHub pages](#to-deploy-using-github-pages)
* [Local Development](#local-development)
  * [How to Fork](#how-to-fork)
  * [How to Clone](#how-to-clone)
[Testing](#testing)
* [Solved Bugs](#solved-bugs)
* [Known Bugs](#known-bugs)
[Credits](#credits)
* [Code used](#code-used)
* [Content](#content)
* [Media](#media)
* [Acknowledgments](#acknowledgments)
  
## UX Design

### The Strategy Plane

For this project I've decided to delve into forbidden  waters of the gambling world. It's a massive industry
netting $450B a year globaly and is on a trajectory to hit $1T before 2030. My focus is to replicate a live casino-style blackjack game, while incorporating all the befenitial features of an online game. The value I wish to provide to the user is a platform where one can learn the game without investing any money, witness potential win/loss rates and hopefully reduce, minimise or completely eliminate one's loses. Idealy this website will educate one on the ins and outs of the game and discourage them from playing and losing their hard earned money.

#### Problem Statement

There isn't a free and competent online environment that would enable one to learn the game of blackjack and practice playing live casino-style game to the hearts contempt, while simultaniously providing usefull information like win rate. Anyone looking to to do so  will generally be faced with 2 options: a formal online casino website or a downloadable game/ some individuals project work. Drawbacks of these options are listed below.

#### Competitor Analysis

I've done an analysis of existing competitors. Me being a user of a number of online casino websites over the years I have aquired quite in depth knowledge of how the game of blackjack is played there. I also browsed a number of repositories and tried a few downloadable games. These are my observations:

##### Formal online casinos:
- Require user to register or create an account
- Require bank card details in some cases
- While some have an option to play with 'play chips' that are free, however they are limited in most cases
- The apperance and functionality is good, but lacking an option to display certain factors (like true count) that would increase players chances to win
- Digital shuffle of the cards works against the player
- Live dealer option with real cards is much slower
- The environment itself is distracting and might lead you to playing other games.

##### Downloadable games/ individual repositories:
- Downloadable games have to be downloaded and in some cases from unknown sources
- The functionality of these are questionable at best
- Will have issues with randomness of the cards
- In many cases even basic features are missing
- In most cases there's no way of tracking your score or win rate.
- Might be suitable for learning the basic, but not for someone looking to learned advanced stuff

#### Target Audience 

Simos-Blackjack is for anyone looking to learn the game of blackjack or expand their knowledge and improve their strategy. From a complete novice to a pro who's on a quest to take the casinos for all they got, everyone will find something of benefit on this website.

### The Scope Plane

#### User Stories

##### First Time User Goals:
- FTU_01 As a first-time user, I want to discern the purpose of the website immediately, so that I know I'm in the right place
- FTU_02 As a first-time user, I want to be able to navigate the website intuitively and effortlessly, so that I can benefit quickly by using it
- FTU_03 As a first-time user, I want to play fully functional and free game of blackjack, so that I have fun way to pass my time
- FTU_04 As a first-time user, I want to be able to play the game easily even without knowing the rules before hand, so that I can still enjoy it
- FTU_05 As a first-time user, I want to see the outcome of the game, so I can feel rewarded
- FTU_06 As a first-time user, I want to be able to look up the rules of the game on the webise, so that I can understand the game better
- FTU_07 As a first-time user, I want to be able to chose the bet size, so that I can control the length of the game.
- FTU_08 As a first-time user, I want to feel excitement while playing, so that I sustain the interest in the game.

##### Returning User Goals:
- RU_01 As a returning user, I want to be able to be able to play continuosly, so that I can inprove my game
- RU_02 As a returning user, I want to be able to check the optimal strategy chart, so I can reduce my losses
- RU_03 As a returning user, I want to be able to track my win/loss rate, so that I can understand a possible game outcome better
- RU_04 As a returning user, I want to be able to contact site developer to report bugs or suggest new features

##### Site Developer Goals:
- SD_01 As a site developer, I want to provide a place for users to learn the game of blackjack for free, so that they can get to know this popular game.
- SD_02 As a site developer, I want to enlighten the user of the actual win rate of this game, so that the user can make a decision whether they want to invest their time into this game.
- SD_03 As a site developer, I want to minimise the losses or users playing this game online or in a casino, so that they can spend their money elsewhere.

##### Future Development
- FTU_06 As a first-time user, I want to hear the sounds of the game, so that I can be more engaged
- RU_05 As a returning user, I want to find out what kind of conditions would make this game profitable, so that I can use it to my advantage

#### Content Requirements and Feature Sets

In the table bellow i tried to extract requirements for the site from user and developer stories and match those requirements with a set of features. Moreover I tried to follow agile approach where project features were split into sprints allowing for an early deployment of the project with basic controls of the game running. This permits the user the ability to test the game while I wonk on the second sprint.

| Requirement | Feature | sprint |
| -- | -- | -- |
| Free and fun to play game of blackjack (FTU_03, FTU_04, RU_01, SD_01)| 1. A functional classic casino–style game of blackjack | 1 |
| | 2. Player and a dealer gets 2 cards. One of dealers cards is hidden | 1 |
| | 3. The total value of players cards is displayed on the screen | 1 |
| | 4. The total value of dealers cards is displayed on the screen | 1 |
| Player is able to make choices of actions they want to take (FTU_03, FTU_04, RU_01) | 5. The game is contolled via play buttons | 1 |
| | 6. Deal button starts the game | 1 |
| | 7. Hit button draws a new card | 1 | 
| | 8. Stand button passes the turn to dealer | 1 | 
| | 9. Split button beraks up the hand in to two separate games | 3 |
| | 10. Double button doubles the size of the bet and draws one card ony | 2 |
| | 11. Bet button brings the player back to the betting stage | 1 | 
| Game elicits some kind of excitement and positive response (FTU_03, FTU_04), FTU_05, FTU_07, FTU_08, RU_03) | 12. Player is able to select the size of the bet | 1 |
| | 13. Player is able to place a bet by mix and maching chips | 3 |
| | 14. A game‘s outcome will result in player gaining/losing chips | 2 | 
| | 15. A game‘s number counter  might provide a way for the user to challenge themselves | 2 |
| | 16. Game outcome is displayed in the middle of the screen | 1 | 
| The website provides extensive informatikon about the game (FTU_04, FTU_06, RU_01, SD_02, SD_03, RU_05) | 17. Game rules are provided in the menu | 1 |
| | 18. Optimal game strategy is provided in the menu | 1 | 
| | 19. Advanced concepts of the game and expected outcomes are provided in the menu | 1 | 
| | 20. Game win rate counter displayed on the screen | 3 |
| Engaging sound effects (FTU_06) | 21. Sound of placing a bet | 3 |
| | 22. Soud of drawing a card | 3 | 
| | 23. Mute all sound | 3 | 
| Clear purpose of the website (FTU_01)| 24. User is greeted with a welcome message containing website logo and short description | 1 | 
| Ease of navigating the website (FTU_02)| 25. Home page overlay that lets user to imput their name which brings them directly to the game | 1 | 
| | 26. Play buttons change depending on the game mode you‘re on | 1 | 
| | 27. Menu is classic ‘gear‘ icon in the top right corner exactly where one would expect it | 1 |
| A way to reach out to the developer of the site (RU_04)| 28. Foooter icons with links to my GitHub and LinkedIn in the footer | 1 |

### The Structure Plane

Simo's Blackjack consists of three pages - the main game page and two information based pages (game rules and advanced strategy) accessibe from the menu.

Uppon loading the page user is presented with a pop up introducing the purpose of the website and prompting them to enter their name.

Uppon pressing 'LET'S PLAY' button the game starts. All the elements on the screen are arranged in such order to unsure a smooth transition of continuos gameplay and to provide the best user experience.

#### Site Architecture

Header containing site logo and menu.

Menu:
- Game Rules (opens a new page in a frame)
- Optimal Play Table
- Advanced Strategy (opens a new page in a frame)

Main Game Page:
- Info table displaying player name and balance
- Dealer cards 
- Player cards
- Outcome message (only appears when a hand is over)
- A placed bet size
- A selection of betting chips
- Game control buttons

Footer contains links to developers GitHub and LinkedIn profiles.

### The Skeleton Plane

The wireframes bellow display the intended design for the site. Great deal of thought and time was put in into making these. However, it payed off in the long run as having more defined design has drasticly dimished the need for experimenting. Only a few minor changes were made for large screen element positioning.

#### Wireframes

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/679f255e-82ea-4c29-ace6-67c2f8b9f49c)

Main Game Page (betting phase)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/360983e2-1100-4782-9bce-3e0692bc0ffd)

Main Game Page (card deal phase)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/c1748758-a221-4d4e-8dbf-d8c42e703557)

Menu (opened)

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/af65273e-505e-41ee-8c14-12d97c3bf587)

### The Surface Plane

#### Colour Scheme

The idea behind the colour scheme I have put together is driven by simplicity and comfort of the eye. For someone looking to learn the game in depth they will spend quite some time playing the game, hence the colour scheme is dominated by greys and blacks. Brighter colours used only on accents and buttons.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/5f132e4f-3640-4840-979f-961c97a5700f)

**Red:** buttons and icon hover effects.

**Black:** header, footer and menu background. Also info table text.

**Dark Grey:** other backgrounds.

**Light Grey:** all text exept for info table.

**Yellow:** accents - chip hover border and chip selection slide arrow (small screens only).

#### Typography

The font [Laila](https://fonts.google.com/specimen/Laila?preview.size=22&query=Laila) is used for all text. It's a playful font that adds to the gaming spirit of the site. One would find similar fonts in official gaming sites of this kind.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/99eb6c04-5d49-4687-9f8b-59ab59442db0)

To highlight buttons I used more bulky [Lalezar](https://fonts.google.com/specimen/Lalezar?preview.size=22&query=lal&category=Sans+Serif) font. To enhance site's design flow the logo also uses this font.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/f1566e20-5938-4b64-a7ae-5237fd55c786) 

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/11e0c834-fad9-4fc4-8a3a-88f4e84c1102)

## Features

All featured have numbers assigned to them which are linked to the requirement table in the scope plane above.

### Current Features

#### Greeting Message
24, 25

The user is greeted with a message that sheds light on the purpose **(24)** of this  website and is prompted to enter their name. Uppon pressing 'Lets Play' button the game begins **(25)** and the greeting message is removed from display.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/27e54119-e42c-41c6-8063-be213972fe88)

The following alert is displayed when a player tries to enter a name thats too long or too short:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/ab5f3a62-7368-4c6a-be9b-d6e80d5428f1)

#### Header
17, 18, 19, 27

Website's logo and a 'gear' **(27)** icon are contained in the header. Uppon clicking the logo the website is reloaded.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/3099bc5d-33f4-422b-a769-68f14d50cdc7)

When the 'gear' icon is clicked it brings up the website's menu that contains the rules the game **(17)** optimal play table **(18)** and andvanced strategy guide **(19)** all of which the user can consult during the game.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/784f7563-8c36-48f5-948a-262ecc5b7268)

#### Main Game Area
1

Contains a functioning Blackjack game **(1)**.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/8b26d227-4189-4fab-901f-24136716444a)

##### Player Info Table
15

In the top left corner a table is displayed with a players name which one would have entered on the greeting window and a remaining chip count **(14)**. The balance will change depending on the outcomes of the hands played.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/4f8160f0-d1a1-4770-9a6b-b10c36c6763d)

##### Hand counter
15

A number of hands (term commonly used to descripe one instance of play) a player has played already **(15)** is displayed is the top right corner. This a way for the player to challenge themselves to see how long they can last in the game. This feature will become more usefull in the future releases when it's ging to be used to calculate the players win rate.

#### Betting chips
12

A player is presented with a selection of chips one can chose **(12)** which will determine the size of the bet. The yellow arrows are used to navigate the chip selection as not all the chips are in sight (only mobile devices).

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/e6916114-2f62-4ddb-87cb-f1dd5f39cd36)

Once a bet is selected it is displayed on the table (this also shows the chip selection as it appears on larger devices).

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/9ada2702-904e-4e8e-8d81-d45c1238cd20)

#### Betting Buttons
6

Betting buttons are used to control the betting stage. 'Deal' button **(6)** locks in the bet and starts the hand. 'Reset' button resets the current bet. This button will be more usefull in future releases when a player is able to bet more than one chip. Currently selecting a different chip has the same effect as 'Reset' button.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/f33ef8b8-6cce-40b4-b835-bf4720317678)

#### Card Field
2, 3 ,4

The cards are dealt after pressing the 'Deal' button. The player and the dealer gets two cards each however one of the deales cards are covered **(2)**. The combined value of playes cards are displayed to the left **(3)**. The same is true for the dealer **(4)**.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/188d6301-94f1-4550-a060-4e1d6812c37b)

#### Play Buttons
5, 7, 8, 10, 26

New set of buttons **(26)** is displayed to control the flow of the hand **(5)**.

'Hit' button **(7)** draws one more card for the player.
'Stand' **(8)** button passes the turn to the dealer.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/5669b4b8-3945-48ff-a60b-ec30813f62c8)

When 'Double' button **(10)** is pressed the players doubles the bet (which is then displayed on the table) and draws one card. The turn is passed to the dealer.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/3a5fdfe7-866f-4418-9838-3a69a536e632)  

#### Game outcome
16

The game outcome is displayed **(16)** once the hand is over and the players balance is updated accordingly.

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/e038e6f4-f62a-4747-b092-7e84b273de9b)

#### Bet Button
11

By pressing 'Bet' button **(11)** players is returned to the betting stage

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/ddb1d0c5-7faa-49b4-b525-85779f020a7e)

The following alert is displayed when player loses all of their chips:

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/a09e2daf-336e-4cad-b659-1b014b4f7f20)

#### Footer

Footer contains links to developers GitHub and LinkedIn profiles

![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/6af5ef12-aafa-4430-afc6-ad6bbc9ccacf)

### Future Features 
9, 13, 20, 21, 22, 23

the features bellow were planned to be implemented in the future releases :

A 'Split' button that breaks the playes hand into two when 2 of the same value cards are dealt. **(9)**
Using more than one chip for a bet. **(13)**
Players win rate counter. **(20)**

Sound effects:

Sound of placing a bet. **(21)**

Sound of drawing a card. **(22)**

option to mute all sound. **(23)**

## Technologies Used

### Languages Used 

HTML, CSS, Javascript

### Frameworks, Libraries & Programs Used

- [Figma](https://figma.com/) - used to create wireframes

- [Git](https://git-scm.com/) - for version control.
- [GitHub](https://github.com/) - to save and store the files for the website
- [Color](https://color.adobe.com/create/color-wheel) - to create the colour palette for the site
- [Google Fonts](https://fonts.google.com/) - to import the fonts used on the website
- [Font Awesome](https://fontawesome.com/) - for the icons used on the website
- [Google Developer Tools](https://developers.google.com/web/tools) - to test progress, troubleshoot, identify responsiveness and styling issues
- [IloveIMG](https://www.iloveimg.com/) - to compress and crop images
- [Favicon.io](https://favicon.io/) - to create favicon
- [Am I Responsive?](http://ami.responsivedesign.is/) - to show the website image on a range of devices
- [Readme.so](https://readme.so/) - to help me write README.md
- [W3 Validator](https://validator.w3.org/) - to validate HTML
- [Jshint](https://jshint.com/) - to test the Javascript code
- [W3 Validator for CSS](https://jigsaw.w3.org/css-validator/) - to validate CSS
- [Developer Mozilla](https://developer.mozilla.org/) - to create linear-gradient colours
- [W3Schools](https://www.w3schools.com/) - for variaus JavaScript functionality querries
- [Wave web accessibility evaluation tool](https://wave.webaim.org/) - to test accessibility
- [WebAim contrast checker](https://webaim.org/resources/contrastchecker/) - to test contrast between text and background
- [Canva](https://www.canva.com/) - to create logos, card and chip images.

## Deployment & Local Development

The site is deployed using GitHub Pages. Visit the deployed site [here.](https://simasjakubenas.github.io/blackjack-milestone-p2/) 

### To deploy using GitHub pages

1. Login/ Sign Up to GitHub.

2. Open the [project repository](https://github.com/SimasJakubenas/blackjack-milestone-p2).

3. Click on "Settings" on the navigation bar under the repository title.

    ![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/349a559a-a55f-4b74-8bee-0db57157728f)

4. Click on "Pages" in the left hand navigation panel.

    ![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/af48b04a-0bb3-4e57-9491-1003bb65ac0f)

5. Under "Source", choose which branch to deploy. Select 'Master' branch and 'Root' folder.

    ![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/64a39fde-d43b-4ed7-935a-0ff33b8380c3)

6. Click "Save", then wait for it to be deployed. It can take some time for the page to be fully deployed.

7. Your URL will be displayed above "Source".

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Simo's Blackjack](https://github.com/SimasJakubenas/blackjack-milestone-p2).
3. Click the Fork button in the top right corner.

    ![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/8e4648c7-3a45-4cc8-bb62-526f2fb599c3)

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Simo's Blackjack](https://github.com/SimasJakubenas/blackjack-milestone-p2).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.

    ![image](https://github.com/SimasJakubenas/blackjack-milestone-p2/assets/138577499/c767569a-52e9-4cb1-9a84-9ddf197bdb09)

4. Change the current working directory in the terminal of your code editor to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please refer to [TESTING.md](TESTING.md) for all testing carried out.

### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Ace value 11 or 1 | Ace value is either 11 or 1 and it depends on the sum of total cars value. I tried changing the value of the object in cards aray but that would change the value of the next card if that card is the same card. I had to assign the ace to a new variable with different value to get this to work || 2 | Cards going off screen | when drawing more than 6 cards (which is very rare) cards are going off screen. i fixed it by wrapping player and dealer cards in a div and setting overflow-x to scroll (not forlarge screens as this is not needed) |
| 3 | when player goes over 21 a double size bet was taken away from the ballance | This was due to determineWinner function running twice in this instance. I fixed it by adding an if statement |

### Known Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Cards are being are not always revealed in order | This is due to data cache. the cards that already been drawn will load quicker. I was toying with an idea to put some sort of delay but that would go againts what I'm trying to atcheve with this project. This does not affect the gameplay in any way it's only a visual thing |

## Credits

### Code used 

All code was written by the developer with exception of:
- [Developer Mozilla](https://developer.mozilla.org/) - to create linear-gradient colours
- [W3Schools](https://www.w3schools.com/) - for variaus JavaScript functionality querries

### Content 

[Georgina Carliste project](https://github.com/GeorginaCarlisle/wild-sliding-puzzles-p2) - some inspiration for project's README.md was taken from Georgina's project.

[Greener Today project](https://github.com/stef-cruz/power-up-point) - some inspiration for README.md was  taken from Greener Today project that I was taking part in.

Content for [Advanced Strategy](https://www.cloudbet.com/en/blog/posts/the-tricky-science-of-advanced-blackjack-strategy#:~:text=Advanced%20blackjack%20strategy%20involves%20keeping,might%20be%20enough%20for%20you.) page was taken from a post on www.cloudbet.com.

[Optiamal Play Table](https://www.techopedia.com/wp-content/uploads/2023/04/TECHOPEDIA-DEALERS-CARD-TABLE-768x788.png) was taken from www.techopedia.com

### Media 

[Background Image](https://www.istockphoto.com/photo/green-poker-background-gm453187915-25699262) by fotograv.

[Canva](https://www.canva.com/) was used to create all other images.

### Acknowledgments

I would like to acknowledge the following people:

* My family and friends for being understanding while I was absent from their lives whilst I was working on this project.

* My mentor Medale Oluwafemi for giving me advice and guidance. Thank you for taking me towards the boundary of limitations of my current skill level and pursuading me to overcome it by acquiring new knowledge.

* Code Institute for providing me with an amazing platform to learn and grow.