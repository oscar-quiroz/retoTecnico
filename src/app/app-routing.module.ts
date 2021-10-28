import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdteComponent } from './components/updte/updte.component';
import { DeleteComponent } from './components/delete/delete.component';
import { GaleryComponent } from './components/galery/galery.component';

const routes: Routes = [  
 
  {path:'galery',  component: GaleryComponent, pathMatch:'full'},
  {path:'create',  component:CreateComponent},

  {path:'update',  component: UpdteComponent},
  {path:'delete',  component: DeleteComponent},


  {
    path: '**',redirectTo:'galery',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
