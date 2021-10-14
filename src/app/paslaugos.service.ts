import { HttpClient } from "@angular/common/http";
import { StaticSymbolResolver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {map} from "rxjs/operators"
import { Ivertinimas } from "./paslaugos/ivertinimas.model";

@Injectable({providedIn:'root'})

export class PaslaugosService{
    error=new Subject<string>();

    constructor(private http:HttpClient){

    }

    getIvertinimai(){
        return this.http
        .get<{[key:string]:Ivertinimas}>("https://ivertinimai-670d2-default-rtdb.europe-west1.firebasedatabase.app/ivertinimai.json")
        .pipe(map((responseData)=>{
            const ivertinimai:Ivertinimas[]=[];
            for(const key in responseData){
                ivertinimai.push({...responseData[key], id:key});
            }
            return ivertinimai;
        }));
    }

    postIvertinimas(nameSurname:string, stars:number, text:string){
        const ivertinimas:Ivertinimas={nameSurname:nameSurname, stars:stars, text:text}
         return this.http
         .post<{name:string}>("https://ivertinimai-670d2-default-rtdb.europe-west1.firebasedatabase.app/ivertinimai.json", ivertinimas);
         
     }



}