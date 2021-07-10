import { Injectable } from "@angular/core";

@Injectable()
export class BarService {

  constructor() {}

  obterBebidas(): string {
    return 'Bebidas';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeicoes(): string {
    return 'Refeições';
  }
}

export class BarServiceMock {


  obterBebidas(): string {
    return 'Bebidas - Mock';
  }

  obterPorcoes(): string {
    return 'Porções - Mock';
  }

  obterRefeicoes(): string {
    return 'Refeições - Mock';
  }
}
