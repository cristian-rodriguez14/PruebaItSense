import { Component, OnInit, Input } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private productService: SharedService, private flashMessages: FlashMessagesService,) { }

  @Input() pd:any;
  ProductId:string="";
  ProductNombre:string="";
  ProductEstado:string="";

  ProductsList:any=[];

  ngOnInit(): void {
  }

  updateProduct(){
    var val = {ProductId:this.ProductId,
      ProductNombre:this.ProductNombre,
      ProductEstado:this.ProductEstado
    };
    if(this.ProductNombre=="" || this.ProductEstado=="") {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    } else{
    this.productService.updateProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }
  }

}
