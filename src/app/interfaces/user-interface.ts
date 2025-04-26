export interface UserInterface {
    name:string,
    telephone:string,
    email:string,
    budget:number,
    service:{
        languages:number,
        pages:number
    }[]
}
