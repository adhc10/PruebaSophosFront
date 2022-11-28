import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/client';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  id:any;
  data:any;
  client=new Client();
  constructor(private route:ActivatedRoute ,private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData(){
    this.dataService.getClientById(this.id).subscribe(res => {
      //console.log(res);
      this.data= res;
      this.client= this.data;
    })
  }
  updateClient(){
    this.dataService.updateClient(this.id,this.client).subscribe(res => {
      window.location.assign('');
    });
  }

}
