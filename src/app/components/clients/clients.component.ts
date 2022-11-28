import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:any;
  client=new Client();

  identificationCtrl = new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)],);
  nameCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  lastnameCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  phonenumberCtrl = new FormControl('', [Validators.required,Validators.minLength(7),Validators.maxLength(10)],);  
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
      this.getClientsData();
  }
  getClientsData(){
    this.DataService.getClients().subscribe(res => {
       this.clients=res;
    });
  }
  insertClient(){    
    this.DataService.insertClient(this.client).subscribe(res => {
      this.getClientsData();
      this.client.Cedula='';
      this.client.Nombre='';
      this.client.Apellido='';
      this.client.Telefono='';
    });
  } 
  deleteClient(id: any){
    this.DataService.deleteClient(id).subscribe(res => {
      this.getClientsData();
    })
  }

}
