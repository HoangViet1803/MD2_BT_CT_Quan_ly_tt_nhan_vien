import { Staff } from "./Staff";
export class StaffManager {
    public staffs: Staff[] = [];
    constructor(){}
    show(index:number): Staff {
        if(index >= 0 && index < this.staffs.length) {
            return this.staffs[index]
        } else {
            throw new Error ("Error")
        }
    }
    addNewStaff(staff: Staff):void {
        this.staffs.push(staff)
    }
    deleteStaff(index:number): void {
        if (index >= 0 && index < this.staffs.length) {
            this.staffs.splice(index,1)
        } else {
            throw new Error("Delete error")
        }
    }
}