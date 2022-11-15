import { Staff } from "./Staff";
import { Gender } from "./Staff";
import { StaffManager } from "./StaffManager";

let staffs: StaffManager = new StaffManager();
staffs.addNewStaff(new Staff('viet', Gender.MALE, new Date("2001-01-08"), "viet@gmail.com","74653265132" ));
staffs.addNewStaff(new Staff('thuy', Gender.FEMALE, new Date("2001-03-18"), "thuy@gmail.com","123456789" ));
staffs.addNewStaff(new Staff('minh', Gender.MALE, new Date("2010-03-05"), "minh@gmail.com","987654321" ));
console.log(staffs.show(1));
console.log(staffs);
staffs.deleteStaff(1)
console.log(staffs);

