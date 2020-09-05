import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-erro',
  templateUrl: './page-erro.component.html',
  styleUrls: ['./page-erro.component.scss']
})
export class PageErroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goHome(): void {
    this.router.navigateByUrl('/');
  }
}
