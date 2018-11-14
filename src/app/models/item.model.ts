export class Item {
    constructor(
        public id:string,
        public content:string,
        public likes:number,
        public key$?:string
    ) { }
}