import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder, private es: EmpresaService) { 

  	this.createForm();

  }

  ngOnInit() {


  	this.es.getperfil().subscribe(data=>{

  		console.log(data)
  	})



  }

    createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_gst_number: ['', Validators.required ]
      });
    }

    addBusiness(person_name, busines_name, business_gst_number) {


    	console.log(person_name,busines_name)

    	 this.es.addBusiness(person_name, busines_name, business_gst_number).subscribe(data => 

      		console.log(data)


     
      		);


  }



}
