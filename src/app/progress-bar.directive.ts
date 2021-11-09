import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[progressBar]' 
  
})


export class ProgressBarDirective implements OnInit{
  
  @Input() value: number = 0;
  @HostBinding('style.width') width:string= `${this.value}%`;
  
  @Input() color: string = null;
  @HostBinding('style.backgroundColor') barColor: string = this.color;


  constructor(private elRef:ElementRef) {

   }

  ngOnInit(){
    this.width = `${this.value}%`;
    if(this.color){
      this.elRef.nativeElement.classList.add(this.color)
    }
  }



}
