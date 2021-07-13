import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService, BebidaService } from './bar.service';

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
    },
    { provide: BebidaService, useExisting: BarService },
  ],
  styles: []
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida1: string;
  barBebida2: string;
  dadosUnidade: string;
  start: number;
  end: number;

  public progress: number = 0;
  public label: string;

  constructor(
    private barServices: BarService,
    @Inject('ConfigManualUnidade') private apiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private apiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.apiConfigManual;
    this.config = this.apiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this.start = Date.now();
    this._increaseProgress(() => console.log(`Finalizado por dentro do Angular! Total: ${this.end - this.start}`));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.start = Date.now();
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => console.log(`Finalizado Fora do Angular! Total: ${this.end - this.start}`));
      })
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => {
        this._increaseProgress(doneCallback)
        this.end = Date.now();
      }, 10);
    } else {
      doneCallback();
    }
  }

}
