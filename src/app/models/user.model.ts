export class UserClass {
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public password:string,
        public confirmPassword?:string
    ) { }
}

export class Auth {
    constructor(
        public email:string,
        public password:string
    ) { }
}