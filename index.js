// Code your solution in this file!

function distanceFromHqInBlocks (startblock) {
  const headquarters = 42
  const distancetravelled = startblock - headquarters
  return Math.abs(distancetravelled)
  
}

function distanceFromHqInFeet() {
  distanceFromHqInBlocks (startblock)* 264;
}