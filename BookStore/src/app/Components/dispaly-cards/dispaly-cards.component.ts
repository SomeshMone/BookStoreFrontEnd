import { Component, OnInit } from '@angular/core';
//import { Book } from '../../Model/mdel';
import { DataService } from '../../Services/Data/data.service';
import { Book } from '../../Model/bookstore.model';
import { BookService } from '../../Services/Book/book.service';
import { response } from 'express';
@Component({
  selector: 'app-dispaly-cards',
  templateUrl: './dispaly-cards.component.html',
  styleUrl: './dispaly-cards.component.scss'
})
export class DispalyCardsComponent implements OnInit {

  constructor(private data:DataService,private book:BookService){}

  BooksPrint:Book[]=[]
  reqData:any;

  bookcount:number=0;
  ngOnInit(): void {
    
    

    this.data.searchBookAccess.subscribe(resp=>{
      this.searchString=resp
    })
    
    this.book.getBooks().subscribe(response=>{
      console.log(response);
      this.BooksPrint=response.data;
      this.bookcount=response.data.length;
    })
  }
  searchString='';
  page:number=1;
  count:number=0;
  booksize:number=12;


  
}
