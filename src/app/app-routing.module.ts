import { AllPostsComponent } from './all-posts/all-posts.component';
import { LoginComponent } from './auth/login/login.component';
import { RouteGuard } from './auth/route-guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FollowingComponent } from './following/following.component';
import { HomeComponent } from './home/home.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'allposts', component: AllPostsComponent, canActivate : [RouteGuard]},
  {path: 'following', component: FollowingComponent, canActivate : [RouteGuard]},
  {path: 'favorites', component: FavoritesComponent, canActivate : [RouteGuard]},
  {path: 'myposts', component: MyPostsComponent, canActivate : [RouteGuard]},
   {path: 'signup', component: SignUpComponent},
   {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}

