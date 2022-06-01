import LineByLine from 'n-readlines';


export class InputReader {

    private reader: LineByLine;

    private currentLine: Buffer | false | null = null;

    constructor(pathToFile: string) {
        this.reader = new LineByLine(pathToFile);
    }

    public readLineAsString(): string {
        this.loadNextLineIfLastLineWasProcessed();
        if (this.currentLine) {
            const line = this.currentLine.toString('utf8');
            this.markCurrentLineAsProcessed();
            return line;
        } 
        throw new Error("File ending reached.")
    }

    public readLineAsStringArray(splitter: string = ' '): string[] {
        return this.readLineAsString().split(splitter);
    }

    public readLineAsNumber(): number {
        return +this.readLineAsString();
    }

    public readLineAsNumberArray(splitter: string = ' '): number[] {
        return this.readLineAsStringArray(splitter).map(s => +s);
    }

    get hasMoreLines(): boolean {
        this.loadNextLineIfLastLineWasProcessed();
        return this.currentLine != false;
    }

    private loadNextLineIfLastLineWasProcessed(): void {
        if(!this.currentLine)
            this.currentLine = this.reader.next();
    }
    
    private markCurrentLineAsProcessed() {
        this.currentLine = null;
    }

}
