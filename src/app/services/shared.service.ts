import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:52868/api"
  constructor(private http:HttpClient) { }

  getProductsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Product');
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl+'/Product',val);
  }

  updateProduct(val:any){
    return this.http.put(this.APIUrl+'/Product',val);
  }

  deleteProduct(val:any){
    return this.http.delete(this.APIUrl+'/Product',val);
  }

  
}
