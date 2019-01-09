// Code your solution in this file!

function distanceFromHqInBlocks (startblock) {
  const headquarters = 42
  const distancetravelled = startblock - headquarters
  return Math.abs(distancetravelled)
  
}

function distanceFromHqInFeet(startblock) {
  const feettravelled = distanceFromHqInBlocks (startblock)* 264;
  return feettravelled
}

function distanceTravelledInFeet (startblock,endblock) {
  const travelledblocks = Math.abs(startblock - endblock)
  const travelledfeet = travelledblocks * 264;
  return travelledfeet
}

function calculatesFarePrice (travelledfeet) {
  const fareprice = travelledfeet
}

