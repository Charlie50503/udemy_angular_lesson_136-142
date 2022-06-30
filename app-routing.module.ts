import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";
import { EditServerComponent } from "src/app/servers/edit-server/edit-server.component";
import { ServerComponent } from "src/app/servers/server/server.component";
import { ServersComponent } from "src/app/servers/servers.component";
import { UserComponent } from "src/app/users/user/user.component";
import { UsersComponent } from "src/app/users/users.component";


const appRoutes: Routes = [
  // { path: '', redirectTo: '/somewhere-else' ,pathMatch: 'full' }, 關於使用''會報錯的解法
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent ,children:[
    { path: ':id/:name', component: UserComponent }
  ]},
  {
    path: 'servers', component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ]
  },
  {
    path:'not-found',component:PageNotFoundComponent
  },
  {
    path:'**',redirectTo:'/not-found'
  },
]


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
