import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  days = [{ name: "Ponedeljak", hoursStart: 9, hoursEnd: 17 },
  { name: "Utorak", hoursStart: 9, hoursEnd: 17 },
  { name: "Sreda", hoursStart: 9, hoursEnd: 17 },
  { name: "Četvrtak", hoursStart: 9, hoursEnd: 17 },
  { name: "Petak", hoursStart: 9, hoursEnd: 17 }]
  constructor() { }

  ngOnInit() {
  }

}
