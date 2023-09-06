import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { SorteioComponent } from './pages/sorteio/sorteio.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"localizacao", component: LocalizacaoComponent},
  {path: "sorteio", component: SorteioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
