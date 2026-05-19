import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NovoUsuario } from './pages/novo-usuario/novo-usuario';
import { Home } from './pages/admin/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    {
        path: '',
        component:Login,
    },
    
    {
        path: 'novo',
        component:NovoUsuario,
    },

    {
        path: 'admin/home',
        canActivate:[authGuard],
        component:Home,
    }
];
