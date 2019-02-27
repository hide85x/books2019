import { Book } from './model/book.model';

export class BooksService {
    
 private books:Book[]= [

  new Book('dupa24632','jakis Typ',23,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa564562','jakis Typ', 3445,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa25676','jakis Typ',23,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa2231','jakis Typ', 3445,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa24632','jakis Typ',23,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa564562','jakis Typ', 3445,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa25676','jakis Typ',23,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),
  new Book('dupa2231','jakis Typ', 3445,"http://s3.party.pl/tvshow/rolnik-szuka-zony-okladka-ksiazki-marty-manowskiej-445763-GALLERY_600.jpg"),

 ]
 getBooks(){
     console.log(this.books)
     return this.books
     
     
 }
 getBook(title: string){
     const book= this.books.find(
         (b)=>{
            return b.title=== title
         }
     );
     return book
 }
}