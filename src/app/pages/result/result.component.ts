import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  pontuacao = 0;
  totalPerguntas: number = 6;

  reiniciarQuiz() {
    this.router.navigate(['/']);
    
  }

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.pontuacao = nav?.extras?.state?.['pontuacao'] || 0;
    
  }
}