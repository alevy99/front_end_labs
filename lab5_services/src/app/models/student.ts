export interface Student {
    id: string;
    name: string;
    age: number;
    address: string;
    course: string;
}

export interface SchoolData {
    School: string;
    Address: string;
    students: Student[];
}
