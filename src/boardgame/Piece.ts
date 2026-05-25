import Board from "./Board";
import Position from "./Position";

class Piece {
    protected position: Position | null;
    private board: Board;

    constructor(board: Board) {
        this.board = board;
        this.position = null;
    }

    protected getBoard() {
        return this.board;
    }
}

export default Piece;