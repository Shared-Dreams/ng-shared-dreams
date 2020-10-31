import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members = [
    {
      name: 'Juana Estrada',
      url: '/assets/imgs/juana.webp',
    },
    {
      name: 'Melisa Araujo',
      url: '/assets/imgs/melisa.webp',
    },
    {
      name: 'Manuela Montoya',
      url: '/assets/imgs/manuela.webp',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
