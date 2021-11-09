import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  private isOpen:boolean = false;

  constructor (private elRef:ElementRef){

  }

  @HostListener('click') toggle(){

    const ul=this.elRef.nativeElement.querySelector("ul");

    if(this.isOpen){
      console.log('uzdarau');
      console.log(this.elRef.nativeElement);
      
      ul.classList.remove('show')
    }else{
      console.log('atidarau');
      ul.classList.add('show')
    }
    this.isOpen=!this.isOpen;
    
  }

  @HostListener('mouseleave') leave(){
    if (this.isOpen){
      this.isOpen = false;
      const ul=this.elRef.nativeElement.querySelector("ul");
      ul.classList.remove('show');


    }
  }

  

}
