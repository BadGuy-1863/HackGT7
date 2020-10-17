export class Duration {
    private _seconds: number;

    /**
     * Creates a new Duration
     * @param { hours, minutes, seconds } hours minutes and seconds
     */
    constructor({ hours = 0, minutes = 0, seconds = 0 }) {
        this._seconds = 3600 * hours + 60 * minutes + seconds;
    }

    hours(): number {
        return Math.floor(this._seconds / 3600);
    }

    minutes(): number {
        return Math.floor(this._seconds / 60) % 60;
    }

    seconds(): number {
        return this._seconds % 60;
    }

    /**
     * Creates a Duration from a string
     * @param durationStr a strin in the form HH:MM:SS or HH:MM
     */
    static fromStr(durationStr: string): Duration {
        const segs = durationStr.split(":").map((i) => Number(i));
        if (segs.length == 0) throw "Invalid String";
        return new Duration({
            hours: segs[0] ?? 0,
            minutes: segs[1] ?? 0,
            seconds: segs[2] ?? 0,
        });
    }

    toString(): string {
        return `${this.hours()}:${this.minutes}:${this.seconds()}`;
    }

    add(other: Duration) {
        return new Duration({ seconds: this._seconds + other._seconds });
    }
}
