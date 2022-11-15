export enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export class Staff {
    public fullName: string;
    public gender: Gender = Gender.OTHER;
    public birthday: Date;
    public email: string;
    public phoneNumber? : string;
    constructor (name: string, gender: Gender, birthday: Date, email: string, phoneNumber?: string) {
        this.fullName = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    showStaff(staff: Staff): void {
        console.log(staff);
        
    }
}