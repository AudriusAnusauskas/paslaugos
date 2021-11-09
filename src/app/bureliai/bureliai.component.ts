import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bureliai',
  templateUrl: './bureliai.component.html',
  styleUrls: ['./bureliai.component.css']
})
export class BureliaiComponent implements OnInit {
  @ViewChild('form') regForm:NgForm
  constructor() { }
public filledForm = [];
  ngOnInit(): void {
  }
  onSubmit(){
    console.log('submitinam forma');
    console.log('Name', this.regForm.controls.name.value,
     'Birth Year', this.regForm.controls.birthYear.value,
     'Email', this.regForm.controls.email.value,
     'Grade', this.regForm.controls.grade.value,
     'Phone No', this.regForm.controls.phoneNo.value, 
     'Sex', this.regForm.controls.sex.value,
     'School', this.regForm.controls.school.value,
     'Discount code', this.regForm.controls.discCode.value);
    
     this.filledForm.push({name:this.regForm.controls.name.value,
    BirthYear:this.regForm.controls.birthYear.value,
    Email:this.regForm.controls.email.value,
    Grade:this.regForm.controls.grade.value,
    PhoneNo:this.regForm.controls.phoneNo.value, 
    Sex:this.regForm.controls.sex.value,
    School:this.regForm.controls.school.value,
    DiscountCode:this.regForm.controls.discCode.value})

    console.log(this.filledForm);
    
    
  }
}
