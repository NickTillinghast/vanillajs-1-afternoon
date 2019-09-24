//alert("Hello Dev");
const gameProgress = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    gameProgress[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    gameProgress[clickedId] = "O";
  }
  console.log(gameProgress);
  console.log(playerSpan);
  const topLeft = gameProgress[0];
  const topCenter = gameProgress[1];
  const topRight = gameProgress[2];
  const middleLeft = gameProgress[3];
  const middleCenter = gameProgress[4];
  const middleRight = gameProgress[5];
  const bottomLeft = gameProgress[6];
  const bottomCenter = gameProgress[7];
  const bottomRight = gameProgress[8];
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (
    middleLeft !== undefined &&
    middleLeft === middleCenter &&
    middleLeft === middleRight
  ) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomCenter &&
    bottomLeft === bottomRight
  ) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    topLeft === bottomLeft
  ) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (
    topCenter !== undefined &&
    topCenter === middleCenter &&
    topCenter === bottomCenter
  ) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === bottomRight
  ) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleCenter &&
    topLeft === bottomRight
  ) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === middleCenter &&
    bottomLeft === topRight
  ) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  let boardFull = true;
  for (var i = 0; i <= 8; i++) {
    if (gameProgress[i] === undefined);
    {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("its a cats game");
  }
}
