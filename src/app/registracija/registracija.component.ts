import { Component, OnInit, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  
  @ViewChild('form') regForm:NgForm
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log('submitinam forma');
    console.log(this.regForm.form.controls);
    
    
  }

  randomPassword(){
    this.regForm.form.patchValue({
      password:(Math.random()*1000),
      name:"Jonas"
    });

    // this.regForm.form.setValue({
    //   password:(Math.random()*1000),
    //   name:"Jonas",
    //   email: "test@test.lt",
    //   age:"",
    //   sex:"",
    //   aprasymas:"",
    //   gender:""
    // });
  }

}
