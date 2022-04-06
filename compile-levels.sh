#!/usr/bin/env sh

files=("average-enemies.json" "average-gap-width.json" "fewer-enemies.json" "fewer-types.json" "more-coins-more-powerups.json" "more-enemies.json" "more-types.json" "narrower-gaps.json" "no-coins-no-powerups.json" "no-enemies.json" "no-enemies-no-gaps.json" "wider-gaps.json")

printf "[\n" > levels/levels.json

noFiles=${#files[@]}

i=0

for name in ${files[@]}; do
  printf "\t" >> levels/levels.json
  cat "levels/$name" >> levels/levels.json

  i=$(($i+1))
 
  if [ $i -lt $noFiles ]
  then
    printf ",\n" >> levels/levels.json
  else
    printf "\n" >> levels/levels.json
  fi
done

printf "]" >> levels/levels.json