import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaslaugosService } from '../paslaugos.service';
import { Ivertinimas } from './ivertinimas.model';

@Component({
  selector: 'app-paslaugos',
  templateUrl: './paslaugos.component.html',
  styleUrls: ['./paslaugos.component.css']
})
export class PaslaugosComponent implements OnInit {

  selectas=-1;

  public ivertinimai:Ivertinimas[]=[];
  public loading:boolean = false;
  public error:string;
public errorSubscription:Subscription;

@ViewChild('nameSurname', {static:true})  nameSurname:ElementRef;
@ViewChild('text', {static:true})  text:ElementRef;
  constructor(private paslaugosService:PaslaugosService) { }

  ngOnInit(): void {
    this.errorSubscription=this.paslaugosService.error.subscribe((error)=>{
      this.error=error;
    })
    this.loadIvertinimai()
  }

  send(nameSurname:string, stars:number, text:string){
    console.log(nameSurname, stars, text);
    this.paslaugosService.postIvertinimas(nameSurname, stars, text).subscribe(() => {
      this.loadIvertinimai();
      this.error=null;
    }, (error)=>{
     this.error= error.message
  });
  console.log('pakeitimas virs 38 eilutes');
  
  this.nameSurname.nativeElement.value="";
  this.selectas=-1;
  this.text.nativeElement.value="";
  }

  loadIvertinimai(){
    this.loading=true;
    this.paslaugosService.getIvertinimai().subscribe((data)=>{
      this.ivertinimai=data;
      this.loading=false;
    }, (error)=>{
      this.error = error.message;
    })
  }

}
