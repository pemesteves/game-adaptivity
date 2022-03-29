#!/usr/bin/env sh

files=("code/setup.js" "code/spriteCuts.js" "code/firstPrototype/enemySpriteTemplate.js" "code/level.js" "code/firstPrototype/predefinedLevel.js" "code/backgroundGenerator.js" "code/backgroundRenderer.js" "code/improvedNoise.js" "code/notchSprite.js" "code/firstPrototype/causeOfDeath.js" "code/character.js" "code/levelRenderer.js" "code/firstPrototype/jumpSection.js" "code/firstPrototype/tubeSection.js" "code/firstPrototype/straightSection.js" "code/firstPrototype/hillStraightSection.js" "code/firstPrototype/cannonSection.js" "code/firstPrototype/decorateSection.js" "code/levelGenerator.js" "code/firstPrototype/predefinedLevelGenerator.js" "code/spriteTemplate.js" "code/enemy.js" "code/fireball.js" "code/sparkle.js" "code/coinAnim.js" "code/mushroom.js" "code/particle.js" "code/fireFlower.js" "code/bulletBill.js" "code/flowerEnemy.js" "code/shell.js" "code/titleState.js" "code/loadingState.js" "code/loseState.js" "code/winState.js" "code/mapState.js" "code/levelState.js" "code/firstPrototype/predefinedLevelState.js" "code/firstPrototype/gameplayMetrics.js" "code/firstPrototype/predefinedTitleState.js" "code/firstPrototype/agent.js" "code/firstPrototype/playerAgent.js" "code/firstPrototype/aiAgent.js")

echo "" > mario-game/mario.js

for name in ${files[@]}; do
  cat $name >> mario-game/mario.js
  printf "\n\n" >> mario-game/mario.js
done