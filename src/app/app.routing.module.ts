import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { PhotoDetailResolver } from './photos/photo-detail/photo-detail.resolver';
import { SiginComponent } from './home/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SiginComponent,
  },
  {
    path: 'user/:userId',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  {
    path: 'user/:userName/:id',
    component: PhotoDetailComponent,
    resolve: {
      photo: PhotoDetailResolver,
    },
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
