import { Component, OnInit, Input } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SharedService } from 'src/app/services/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [DatePipe]
})
export class AddComponent implements OnInit {
  date: Date | undefined;

  constructor(private productService: SharedService, private flashMessages: FlashMessagesService, private datePipe: DatePipe) {  }

  @Input() pd:any;
  ProductId:string="";
  ProductNombre:string="";
  ProductEstado:string="";
  ProductFechaIngreso:string="";
  
  ProductsList:any=[];

  ngOnInit(): void {
  }

  addProduct(){
    this.date=new Date();
    let latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
    var val = {ProductId:this.ProductId,
      ProductNombre:this.ProductNombre,
      ProductEstado:this.ProductEstado,
      ProductFechaIngreso:latest_date,
    };
    if(this.ProductNombre=="" || this.ProductEstado=="" ||  this.ProductFechaIngreso=="") {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    } else{
      this.productService.addProduct(val).subscribe(res=>{
        alert(res.toString());
      });
    }
    
  }

}
