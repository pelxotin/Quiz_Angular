import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './pags/quiz/quiz.component';
import { ResultComponent } from './pages/result/result.component';

 export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'resultado', component: ResultComponent },
  { path: '', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}