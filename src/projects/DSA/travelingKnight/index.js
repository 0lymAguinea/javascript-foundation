function knightMoves(start, end) {
  // Define possible moves for a knight
  const moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];
  // Convert chessboard coordinates to string format for easier comparison
  const stringify = (coord) => coord.join(",");

  // Convert string format back to array coordinates

  // Initialize a queue for BFS
  const queue = [[start]];
  // Set to keep track of visited squares
  const visited = new Set();
  visited.add(stringify(start));

  // Perform BFS
  while (queue.length > 0) {
    const path = queue.shift();
    const currentPos = path[path.length - 1];

    if (stringify(currentPos) === stringify(end)) {
      console.log(path);
    }

    for (const move of moves) {
      const nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
      const nextPosStr = stringify(nextPos);

      if (
        nextPos[0] >= 0 &&
        nextPos[0] < 8 &&
        nextPos[1] >= 0 &&
        nextPos[1] < 8 &&
        !visited.has(nextPosStr)
      ) {
        visited.add(nextPosStr);
        queue.push([...path, nextPos]);
      }
    }
  }

  // If no valid path is found, return an empty array
  return [];
}

const result = knightMoves([3, 3], [4, 3]);
