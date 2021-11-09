import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[discCode]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting: DiscCodDirective, 
      multi:true
    }
  ]
})
export class DiscCodDirective {

  constructor() { }

  validate(input: FormControl){
    if( input.value==="gamta2021-baltija" || 
       input.value==="gamta2021-gintaras"|| 
       input.value==="gamta2021-vytauto"){
      return null
    }
   return {
    DiscCode:true
  };
   }

}
