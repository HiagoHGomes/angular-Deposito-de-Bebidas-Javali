import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements DoCheck {
  n1: number = 1;
  n2: number = 1;
  n3: number = 100;
  numero: string | undefined;
  numeroSorteado: number | string = "Aguardando sorteio";
  sorteioEmAndamento: boolean = false;
  className: string = "numeroSorteado"

  ngDoCheck(): void {
    if (this.n1 > 1) {
      this.numero = "números";
    } else {
      this.numero = "número";
    }
  }

  sortear() {
    if (this.sorteioEmAndamento) {
      return;
    }
    
    this.className = "noBlink"

    if (this.n1 <= 0 || this.n2 <= 0 || this.n3 <= 0) {
      alert("Os valores definidos não podem ser menor ou igual a 0");
    } else {
      this.sorteioEmAndamento = true;
      const numerosSorteados: number[] = [];
      const delay = 1000; // Atraso em milissegundos entre a exibição de cada número sorteado

      const sorteioRecursivo = (indice: number) => {
        if (indice < this.n1) {
          const numeroSorteado = Math.floor(Math.random() * (this.n3 - this.n2 + 1)) + this.n2;
          numerosSorteados.push(numeroSorteado);
          this.numeroSorteado = numerosSorteados.join(', ');
          setTimeout(() => sorteioRecursivo(indice + 1), delay);
        } else {
          this.sorteioEmAndamento = false;
        }
      };

      sorteioRecursivo(0);

      
    }
  }
}
