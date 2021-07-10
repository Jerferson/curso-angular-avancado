import { Component, OnInit } from '@angular/core';
import { BarService, BarServiceMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarService, useClass: BarService }
  ],
  styles: []
})
export class BarComponent implements OnInit {

  barBebida1: string;

  constructor(private barServices: BarService) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
  }

}
