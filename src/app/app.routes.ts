import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'students',
        loadChildren: () =>
            import('./students/students-module').then(m => m.StudentsModule)
    }
];
