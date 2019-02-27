import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/books/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged=false

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.logIn()
    this.logged=!this.logged
  }


}
