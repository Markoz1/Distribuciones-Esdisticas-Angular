import { Component, OnInit } from '@angular/core';

import { Poisson } from './poisson/poisson';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrls: ['./distribucion.component.css']
})
export class DistribucionComponent implements OnInit {
	poisson: Poisson = {
	id: 1,
   	name: 'probando poison'
  	};
  constructor() { }

  ngOnInit() {
  }

}
