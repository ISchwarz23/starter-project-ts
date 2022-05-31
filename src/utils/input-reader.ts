const lineByLine = require('n-readlines');


export class InputReader {

    private reader: any;

    constructor(pathToFile: string) {
        this.reader = new lineByLine(pathToFile);
    }

    public readLineAsString(): string {
        return this.reader.next().toString('utf8');
    }

    public readLineAsStringArray(splitter: string = ' '): string[] {
        return this.readLineAsString().split(splitter);
    }

    public readLineAsNumber(): number {
        return +this.readLineAsString();
    }

    public readLineAsNumberArray(splitter: string = ' '): number {
        return +this.readLineAsStringArray(splitter).map(s => +s);
    }

}
