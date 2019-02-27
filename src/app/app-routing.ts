import { BooksOverviewComponent } from './books/books-overview/books-overview.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookEditComponent } from './books/book-details/book-edit/book-edit.component';
import { AuthGuard } from './books/auth-guard.service';

const routes: Routes= [
    {path: '', component:BooksOverviewComponent},
    {path: 'detail/:title', component: BookDetailsComponent, children: [
        {path: 'edit',canActivate: [AuthGuard] ,component: BookEditComponent}
    ]}  
    

    
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

 })
export class AppRouting {}