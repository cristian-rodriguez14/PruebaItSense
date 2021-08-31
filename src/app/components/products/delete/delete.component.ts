import { Component, OnInit, Input } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private productService: SharedService, private flashMessages: FlashMessagesService,) { }

  @Input() pd:any;
  ProductId:string="";
  ProductNombre:string="";
  ProductFechaEgreso:string="";

  ProductsList:any=[];

  ngOnInit(): void {
  }


  deleteProduct(){
    var val = {ProductId:this.ProductId,
      ProductFechaEgreso:this.ProductFechaEgreso
    };
    if(this.ProductFechaEgreso=="") {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    } else{
    this.productService.deleteProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }
  }

}
