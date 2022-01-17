import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = {
    id: '', 
    name: '',
    description: '',
    sku: '',
    price: 0,
    stock: 0
  };
  itemPrice=0;
  stockQty=0;
  empty=!true;
  submitted = false;
  message = '';

  constructor(private tutorialService: TutorialService ,private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    
    const data = {
       
      name: this.tutorial.name,
      description: this.tutorial.description,
      sku: this.tutorial.sku,
      price: this.tutorial.price,
      stock: this.tutorial.stock,
      
    };
    //let price:Number;
    if(data){
      this.itemPrice=Number(this.tutorial.price);
      this.stockQty=Number(this.tutorial.stock)
    }
  
    if(this.itemPrice>0){
      if(this.stockQty>0){
          this.tutorialService.create(data)
            .subscribe({
              next: (res) => {
                console.log(res);
                this.submitted = true;
                alert('Product was created successfully!')
                this.router.navigate(['/tutorials']);
              },
              error: (e) => console.error(e)
            });
          }else{
            alert("Stock quantity cannot be less or equal to 0");
            return;
          }
    }else{
      alert("Price cannot be less or equal to R0");
      return;
    }
  }

  // isEmpty(empty:any,info:any): any{
  //   if(!info){
  //     empty = false;
  //   }
  //   return empty;
  // }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      id: '', 
      name: '',
      description: '',
      sku: '',
      price: 0,
      stock: 0
    };
  }

}