class Board {
    private row: number;
    private column: number;
    private pieces: any[][];

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.pieces = Array(row).fill(null).map(() => Array(column));
    }

    public getRows(): number {
        return this.row;
    }

    public getColumns(): number {
        return this.column;
    }
}

export default Board;