## Contents
[UX Design](#ux-design)
- [The Strategy Plane](#the-strategy-plane)
- [The Scope Plane](#the-scope-plane)
- [The Structure Plane](#the-structure-plane)
- [The Skeleton Plane](#the-skeleton-plane)
- [The Surface Plane](#the-surface-plane)
[Features](#features)
[Technologies Used](#technologies-used)
- [Languages used](#languages-used)
- [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
[Deployment & Local Development](#deployment--local-development)
- [To deploy using GitHub pages](#to-deploy-using-github-pages)
- [Local Development](#local-development)
  - [How to Fork](#how-to-fork)
  - [How to Clone](#how-to-clone)
[Testing](#testing)
- [Solved Bugs](#solved-bugs)
- [Known Bugs](#known-bugs)
[Credits](#credits)
- [Code used](#code-used)
- [Content](#content)
- [Media](#media)
- [Acknowledgments](#acknowledgments)
  
## UX Design

### The Strategy Plane

For this project I've decided to delve into forbidden  waters of the gambling world. It's a massive industry
netting $450B a year globaly and is on a trajectory to hit $1T befor 2030. My focus is to replicate a live casino-style blackjack game, while incorporating all the befenitial features of an online game. The value I wish to provide to the user is a platform where one can learn the game without investing any money, witness potential win/loss rates and hopefully reduce, minimise or completely eliminate one's loses. Idealy this website will educate one on the ins and outs of the game and discourage them from playing and losing their hard earned money.

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

Simos-Blackjack is for anyone looking to learn the game of blackjack or expand their knowledge and improve their strategy. From a compleat novice to a pro who's on a quest to take the casinos for all they got, everyone will find something of benefit on this website.

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

##### Site Developer Goals:
- SD_01 As a site developer, I want to provide a place for users to learn the game of blackjack for free, so that they can get to know this popular game.
- SD_02 As a site developer, I want to enlighten the user of the actual win rate of this game, so that the user can make a decision whether they want to invest their time into this game.
- SD_03 As a site developer, I want to minimise the losses or users playing this game online or in a casino, so that they can spend their money elsewhere.

##### Future Development
- FTU_06 As a first-time user, I want to hear the sounds of the game, so that I can be more engaged
- RU_04 As a returning user, I want to find out what kind of conditions would make this game profitable, so that I can use it to my advantage

#### Content Requirements and Feature Sets

In the table bellow i tried to extract requirements for the site from user and developer stories and match those requirements with a set of features. Moreover I tried to follow agile approach where project features were split into sprints allowing for an early deployment of the project with basic controls of the game running. This permits the user the ability to test the game while I wonk on the second sprint.

| Requirement | Feature | sprint |
| -- | -- | -- |
| Free and fun to play game of blackjack | A functional classic casino–style game of blackjack | 1 |
| | Player and a dealer gets 2 cards. One of dealers cards is hidden | 1 |
| | The total value of players cards is displayed on the screen | 1 |
| | The total value of dealers cards is displayed on the screen | 1 |
| Player is able to make choices of actions they want to take | The game is contolled via play buttons | 1 |
| | Deal button starts the game | 1 |
| | Hit button draws a new card | 1 | 
| | Stand button passes the turn to dealer | 1 | 
| | Split button beraks up the hand in to two separate games | 3 |
| | Double button doubles the size of the bet and draws one card ony | 2 |
| | Bet button brings the player back to the betting stage | 1 | 
| Game elicits some kind of excitement and positive response | Player is able to select the sie of the bet | 1 |
| | Player is able to place a bet by mix and maching chips | 3 |
| | A game‘s outcome will result in player gaining/losing chips | 2 | 
| | A game‘s number counter  might provide a way for the user to challenge themselves | 2 |
| | Game outcome is displayed in the middle of the screen | 1 | 
| The website provides extensive informatikon about the game | Game rules are provided in the menu | 1 |
| | Optimal game strategy is provided in the menu | 1 | 
| | Advanced concepts of the game and expected outcomes are provided in the menu | 1 | 
| Engaging sound effects | Sound of placing a bet | 3 |
| | Soud of drawing a card | 3 | 
| | Mute all sound | 3 | 
| Clear purpose of the website | User is greeted with a welcome message containing website logo and short description | 1 | 
| Ease of navigating the website | Home page overlay that lets user to imput their name which brings them directly to the game | 1 | 
| | Play buttons change depending on the game mode you‘re on | 1 | 
| | Menu is classic ‘gear‘ icon in the top right corner exactly where one would expect it | 1 |
| A way to reach out to the developer of the site | Foooter icons with links to my GitHub and LinkedIn in the footer | 1 |

### The Structure Plane

Simo's Blackjack consists three pages - the main game page and two information based pages (game rules and advanced strategy) accessibe from the menu.

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

#### Greeting Message

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