export class Course {
    private readonly id?: number;
    private readonly name: string;
    private readonly description: string;
    private readonly phase: number;
    private readonly credits: number;

    constructor(course: {
        id?: number;
        name: string;
        description: string;
        phase: number;
        credits: number;
    }) {
        this.id = course.id;
        this.name = course.name;
        this.description = course.description;
        this.phase = course.phase;
        this.credits = course.credits;
    }

   getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPhase(): number {
        return this.phase;
    }

    getCredits(): number {
        return this.credits;
    }

    equals(course: Course): boolean {
        return (
            this.name === course.getName() &&
            this.description === course.getDescription() &&
            this.phase === course.getPhase() &&
            this.credits === course.getCredits()
        );
    }
}