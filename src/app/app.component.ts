import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  a;
  b;
  output = "";
  hasil;
  besar;

  klikhasil(angka1,angka2){
    this.a = parseInt(angka1);
    this.b = parseInt(angka2);
    this.hasil = Math.pow(parseInt(angka1), parseInt(angka2));
    this.besar = this.a;
    if(this.b>this.a){
      this.besar = this.b;
    }
    this.output = 'hasil =  '+ this.hasil + '<br/>';

    if (this.hasil % 2 ==0){
      this.output += "Pola B <br/>"
        for(let i = this.besar ;i<=this.hasil; i++){
          for(let j = 0; j<i; j++){
            this.output += "*"
          }
          this.output += "<br/>"
        }
    }
    if(this.hasil % 2 != 0){
      this.output += "Pola A <br/>"
        if (this.b>this.a){
          for(let i = 0; i<this.b; i++){
            for(let j = this.b-i; j>0; j--){
              this.output += "*"
            }
            for(let x = 0; x<i+1 && x<this.a && i<this.a; x++){
              this.output += "O"
            }
            this.output += "<br>"
          }
        }
        else{
          for(let i = 0; i<this.a; i++){
            for(let j = this.b-i; j>0; j--){
              this.output += "*"
            }
            for(let x = 0; x<i+1 && x<this.a && i<this.a; x++){
              this.output += "O"
            }
            this.output += "<br>"
          }
        }
      }
    }
  clear(){
    this.a="";
    this.b="";
    this.output="";
    this.hasil=0
  };
}

