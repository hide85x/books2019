export class Book {
    title:string
    author:string
    pages:number
    ratings:number
    notes: string
    isDone:false
    imgPath:string
    description:string

    constructor(title:string, author: string, pages:number, imgPath:string){
        this.title= title;
        this.pages= pages;
        this.author= author;
        this.imgPath= imgPath
    }
}