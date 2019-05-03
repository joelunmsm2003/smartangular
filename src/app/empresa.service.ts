import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  uri = 'http://mylookxpressapp.com/perfil';

  myGlobalVar:any ="http://ec2-18-221-248-184.us-east-2.compute.amazonaws.com:8000";

  constructor(private http: HttpClient) { }

   addBusiness(person_name, business_name, business_gst_number) {


   	console.log(person_name)
   


  	const data = {"template":[11,12,13],"datos":{"checkin":'2019-04-01',"checkout":'2019-04-02'},"hotel":"7"}

  	

          return this.http.post(this.myGlobalVar+'/hotel/filtro/', data)
            .map((response: Response) => {
                
                return response;
                
            });
  }


  	getperfil() {
    return this.http.get(this.myGlobalVar+'/hotel').map((res) => {
      return res;
	    } );
	  }





   



}
