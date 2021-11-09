import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  rezForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rezForm=new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null),
      'age':new FormControl(null),
      'type':new FormControl("admin")
    });
  }

  onSubmit(){
    console.log(this.rezForm);
    
  }

}
