import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[birthYear]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting: BirthYearDirective, 
      multi:true
    }
  ]
})
export class BirthYearDirective {

  constructor() { }

  validate(input: FormControl){
    if( input.value >= 2003 && input.value <= 2009){
      return null;
    }
   return {
    BirthYear:true
  };
   }

}
