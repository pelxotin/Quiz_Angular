import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  perguntas = [
    {
      pergunta: 'Qual linguagem é usada no Angular ?',
      alternativas: ['Python', 'Java', 'TypeScript', 'C++'],
      respostaCorreta: 2
    },
    {
      pergunta: 'Qual comando cria um componente ?',
      alternativas: ['ng new component', 'ng create component', 'ng build component', 'ng generate component'],
      respostaCorreta: 3
    },
      {
      pergunta: 'Qual decorador é usado para definir um componente ?',
      alternativas: ['@Directive', '@NgModule', '@Injectable', '@Component'],
      respostaCorreta: 3
    },
      {
      pergunta: 'Qual arquivo é responsavel por definir os módulos e componentes pricipais de uma aplicação em Angular ?',
      alternativas: ['main.ts', 'app.module.ts', 'app.component.ts', 'angular.json','app.config.ts'],
      respostaCorreta: 1
    },
      {
      pergunta: 'Qual Diretiva Angular é usada para renderizar uma lista de elementos com base em uma coleção ?',
      alternativas: ['*ngFor', '*ngModel', '*ngSwitch', '*ngIf'],
      respostaCorreta: 3
    },
      {
     pergunta: 'Qual comando é usado para servir a aplicação do Angular localmente ?',
      alternativas: ['ng build', 'ng serve', 'ng run', '*ng start','*ng serve'],
      respostaCorreta: 1
    }
  ];

  indiceAtual = 0;
  pontuacao = 0;

  constructor(private router: Router) {}

  responder(indiceEscolhido: number) {
    if (indiceEscolhido === this.perguntas[this.indiceAtual].respostaCorreta) {
      this.pontuacao++;
    }
    this.indiceAtual++;
    if (this.indiceAtual >= this.perguntas.length) {
      this.router.navigate(['/resultado'], { state: { pontuacao: this.pontuacao } });
    }
  }
}