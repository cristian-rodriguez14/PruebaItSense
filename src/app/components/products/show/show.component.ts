import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var $: any;

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  

  ProductList: any=[];
  pd:any;
  myDate = new Date();
  ModalTitle:string="";
  ActivateAddProduct:boolean=false;
  ActivateUpdateProduct:boolean=false;
  ActivateDeleteProduct:boolean=false;
  constructor(private productService: SharedService, private flashMessages: FlashMessagesService,) { }

  ngOnInit(): void {
    this.refreshProdList();
  }

  refreshProdList() {
    this.productService.getProductsList().subscribe(data=>{
      this.ProductList=data;
    });
  }

  addClick(){
    $('#createProduct').modal('show');
    this.pd={
      ProductId:0,
      ProductNombre:"",
      ProductEstado:"",
      ProductFechaIngreso:""
    }
    this.ModalTitle="Añadir";
    this.ActivateAddProduct=true;
  }

  closeClick(){
    this.ActivateAddProduct=false;
    this.refreshProdList();
  }

  editClick(item: any){
    $('#updateProduct').modal('show');
    this.pd=item;
    /* this.pd={
      ProductId:item.ProductId,
      ProductNombre:item.ProductNombre,
      ProductEstado:item.ProductEstado,
    } */
    this.ModalTitle="Actualizar Producto";
    this.ActivateUpdateProduct=true;
  }

  deleteClick(item: any){    
    $('#deleteProduct').modal('show');
    this.pd=item;
    /* this.pd={
      ProductId:item.ProductId,
      ProductNombre:item.ProductNombre,
      ProductFechaEgreso:item.ProductFechaEgreso,
    } */
    this.ModalTitle="Salida del Producto";
    this.ActivateDeleteProduct=true;
  }

}
