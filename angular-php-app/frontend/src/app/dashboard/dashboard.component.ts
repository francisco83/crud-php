import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Policy} from '.././policy';
import {Categoria} from '../categoria';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies:  Policy[];
  categorias: Categoria[];
  selectedPolicy:  Policy  = { id :  null , number: null, amount: null};

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readPolicies().subscribe((policies: Policy[]) => {
      this.policies = policies;
      console.log(this.policies);
    });

    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
      console.log(this.categorias);
    });

  }

  createOrUpdatePolicy(form) {
    if (this.selectedPolicy && this.selectedPolicy.id){
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy)=>{
        console.log('Policy updated' , policy);
      });
    } else {

      this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
        console.log('Policy created, ', policy);
      });
    }

  }

  selectPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy: Policy) => {
      console.log('Policy deleted, ', policy);
    });
  }

}
