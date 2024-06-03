let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function handleMove(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    renderBoard();
    
    const winner = checkWin();
    if (winner) {
        gameActive = false;
        document.getElementById('status').innerText = `${winner} wins!`;
        return;
    }

    if (checkDraw()) {
        gameActive = false;
        document.getElementById('status').innerText = `It's a draw!`;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    renderBoard();
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
}

function renderBoard() {
    board.forEach((cell, index) => {
        document.getElementsByClassName('cell')[index].innerText = cell;
    });
}
