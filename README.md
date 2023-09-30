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