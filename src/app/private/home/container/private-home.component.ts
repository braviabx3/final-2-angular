import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.css']
})
export class PrivateHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }


}
