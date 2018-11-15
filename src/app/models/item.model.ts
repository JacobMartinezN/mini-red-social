export class Item {
    constructor(
        public id:string,
        public content:string,
        public likes:number,
        public email:string,
        public owner:string,
        public key$?:string
    ) { }
}