import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getList().subscribe({
      next: (data: any)=> {
        console.log(data);
      }
    });
    
  }

}
