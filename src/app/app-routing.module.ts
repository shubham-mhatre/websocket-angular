import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateIRNComponent } from './components/generate-irn/generate-irn.component';
import { CancelIRNComponent } from './components/cancel-irn/cancel-irn.component';

const routes: Routes = [
  { path: 'generate-invoice', component: GenerateIRNComponent },
  { path: 'cancel-invoice', component: CancelIRNComponent },
  { path: '', redirectTo: '/generate-invoice', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
