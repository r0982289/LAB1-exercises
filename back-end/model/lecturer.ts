import { User } from './user';

export class Lecturer {
    private id?: number;
    private user: User;
    private expertise: string;

    constructor(lecturer: { user: User; expertise: string; id?: number }) {
        this.id = lecturer.id;
        this.user = lecturer.user;
        this.expertise = lecturer.expertise;
    }

    getId(): number | undefined {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getExpertise(): string {
        return this.expertise;
    }

    equals(lecturer: Lecturer): boolean {
        return (
            this.id === lecturer.getId() &&
            this.user.equals(lecturer.getUser()) &&
            this.expertise === lecturer.getExpertise()
        );
    }
}
