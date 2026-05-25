class Position {
    private row: number;
    private column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    getRow(): number {
        return this.row;
    }

    getColumn(): number {
        return this.column;
    }

    toString(): string {
        return `${this.row}, ${this.column}`;
    }
}

export default Position;
