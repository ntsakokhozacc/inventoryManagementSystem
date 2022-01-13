import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

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

  empty=!true;
  submitted = false;
  message = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    
    const data = { 
      name: this.tutorial.name,
      description: this.tutorial.description,
    sku: this.tutorial.sku,
    price: this.tutorial.price,
    stock: this.tutorial.price
      
    };
    
    // this.empty= this.isEmpty(this.empty,this.data)

    // if(this.empty=false){
    //   this.message="empty"
    // }

    // if(!data){
    //   this.empty = !this.empty;
    //   this.message = 'empty form'
    // }

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
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