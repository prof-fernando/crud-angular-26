import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { NovoUsuario } from './pages/novo-usuario/novo-usuario';
import { Home } from './pages/admin/home/home';
import { authGuard } from './guards/auth-guard';
import { ProdutoForm } from './pages/admin/produto/produto-form/produto-form';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },

  {
    path: 'novo',
    component: NovoUsuario,
  },

  {
    path: 'admin/home',
    canActivate: [authGuard],
    component: Home,
  },
  {
    path: 'admin/produto/novo',
    // canActivate: [authGuard],
    component: ProdutoForm,
  },
];
