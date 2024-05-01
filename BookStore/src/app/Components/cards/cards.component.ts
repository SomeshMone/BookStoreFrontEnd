import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private router:Router){}

  @Input() Book:any;

  

  ngOnInit(): void {
   
  }

  goToBookDetails(){
    this.router.navigate(['dashboard/bookdetails', this.Book.id])
  }


  



  
 


}
