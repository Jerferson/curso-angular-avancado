import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // { provide: BarService, useClass: BarService },
    {
      provide: BarService, useFactory: BarFactory,
      deps: [
        HttpClient,
        Injector
      ]
    }
  ],
  styles: []
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida1: string;
  dadosUnidade: string;

  constructor(
    private barServices: BarService,
    @Inject('ConfigManualUnidade') private apiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private apiConfig: BarUnidadeConfig
  ) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.apiConfigManual;
    this.config = this.apiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();
  }

}
