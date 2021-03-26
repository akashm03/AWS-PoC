class User{

    userId: string;
    name: string;
    dob: string;
    gender: string;

    constructor(userId: string, name: string, dob: string, gender:string){
        this.userId = userId;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }
}
export default User;