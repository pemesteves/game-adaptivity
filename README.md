# Exploring Player Adaptivity through Level Design: A Platformer Case Study

This repository contains the code for two studies of a Master’s thesis on Game Adaptivity, entitled 'Exploring Player Adaptivity through Level Design: A Platformer Case Study.'

This document describes the repository's contents. It was firstly cloned from the [Infinite Mario Bros JS port repository](https://github.com/OpenHTML5Games/games-mirror/tree/gh-pages/dist/mariohtml5) and refactored to meet the thesis’ requirements. 
Two studies were conducted during this thesis, divided across the repository using folders named ‘firstPrototype’ and ‘secondPrototype.’
It also includes questionnaires used in the studies and files for data analysis.


## Contents

- Infinite Mario Bros
  - Engine
  - Code
  - Assets
  - Compilation
- Questionnaires
- Data Collection
- Data Analysis

## 1. Infinite Mario Bros

As already mentioned, this repository was firstly cloned from the [Infinite Mario Bros JS port repository](https://github.com/OpenHTML5Games/games-mirror/tree/gh-pages/dist/mariohtml5). 

The game is divided into several folders:
- code, with the game's code;
- css, with stylesheets for the game's pages;
- Engine, with the engine's code;
- images, with the game's sprites;
- include, with all the external packages needed in the game: Bootstrap, SurveyJS, jQuery, ...;
- js, with scripts for the game's pages and logic between them;
- mario-game, with compiled code and engine files, which need to be minified later;
- sound, with the game's sounds.

Other important files are on the repository’s root folder, such as the HTML pages, the minified code of the game and the engine, the pages’ icon, and bash scripts to compile the game’s code and the levels JSON files.

In the following sections, each of these components is more detailed.

### 1.1. Engine

The engine provides the core functionalities of the game, such as the timer, the camera, the inputs, and others.

It is a generic JavaScript game engine that can be used to create similar HTML games. 

### 1.2. Code

The game’s code distinguishes Infinite Mario Bros from other games using this engine. It creates the characters, the enemies, the game’s states, etc.

This code was extended during both studies conducted during the Master’s thesis, so do not find it strange to see the ‘firstPrototype’ and the ‘secondPrototype’ folders inside the code’s folder.

This code was refactored to make extending the game’s classes easier. Nevertheless, besides the LoadingState class, which now allows playing the game or the prototypes, nothing was changed, i.e., every class maintained its purpose and functionalities, and only the new classes added something to the game.

### 1.3. Assets

Besides the code, the other game’s assets can be found in the 'sound' and 'images' folders, as already explained.

### 1.3. Compilation

To avoid wasting too much time, two scripts were created to compile the game code and level JSON files into single files:
- compile-mario.sh, which compiles the game’s code;
- compile-levels.sh, which compiles the levels JSON files used in the first study.

The output of the first script is the file 'mario.js' in the 'mario-game' folder, while the second is the 'levels.json' inside the 'levels' folder.

## 2. Questionnaires

Several questionnaires were created for both studies using SurveyJS and incorporated into the game.

Each of the game's pages corresponds to a different questionnaire:
- index.html, where demographics, personality, and gaming experience questions are asked;
- mario.html, where the levels can be played and, in the first study, questions related to the levels are asked;
- comments.html, where players can comment on the overall experience and, in the second study, questions about the players' preferences are asked.

These questionnaires are represented by JSON files, which can be found in the 'questionnaire' folder.

## 3. Data Collection

Both studies needed to collect gameplay data and the answers to the questionnaires. To do that, Google Spreadsheets and Google App Scripts were used, allowing to send GET and POST requests to a web app that would edit the spreadsheet. The web app was deployed using the script found in the 'data-collection' folder. This script can be incorporated into other Google Spreadsheets allowing other investigators to gather data about their studies.

## 4. Data Analysis

Both studies published a dataset using the following DOIs [10.5281/zenodo.6623375](https://doi.org/10.5281/zenodo.6623375) and [10.5281/zenodo.6677476](https://doi.org/10.5281/zenodo.6677476).

Python and RapidMiner were used to make the data analyses, as described in the thesis. Everything related to these analyses can be found in the ‘data-analysis’ folder.
