import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IdentityGuard } from './services/identity.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [IdentityGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout/:sure',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'citologias',
    loadChildren: () => import('./pages/citologias/citologias.module').then( m => m.CitologiasPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-unidades',
    loadChildren: () => import('./pages/cito-unidades/cito-unidades.module').then( m => m.CitoUnidadesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-unidades-detail/:id',
    loadChildren: () => import('./pages/cito-unidades-detail/cito-unidades-detail.module').then( m => m.CitoUnidadesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-pacientes',
    loadChildren: () => import('./pages/cito-pacientes/cito-pacientes.module').then( m => m.CitoPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-pacientes-detail/:id',
    loadChildren: () => import('./pages/cito-pacientes-detail/cito-pacientes-detail.module').then( m => m.CitoPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-pac-archivo',
    loadChildren: () => import('./pages/cito-pac-archivo/cito-pac-archivo.module').then( m => m.CitoPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/cito-pac-archivo-detail/cito-pac-archivo-detail.module').then( m => m.CitoPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs',
    loadChildren: () => import('./pages/vphs/vphs.module').then( m => m.VphsPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-unidades',
    loadChildren: () => import('./pages/vphs-unidades/vphs-unidades.module').then( m => m.VphsUnidadesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-unidades-detail/:id',
    loadChildren: () => import('./pages/vphs-unidades-detail/vphs-unidades-detail.module').then( m => m.VphsUnidadesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-pacientes',
    loadChildren: () => import('./pages/vphs-pacientes/vphs-pacientes.module').then( m => m.VphsPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-pacientes-detail/:id',
    loadChildren: () => import('./pages/vphs-pacientes-detail/vphs-pacientes-detail.module').then( m => m.VphsPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-pac-archivo',
    loadChildren: () => import('./pages/vphs-pac-archivo/vphs-pac-archivo.module').then( m => m.VphsPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/vphs-pac-archivo-detail/vphs-pac-archivo-detail.module').then( m => m.VphsPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama',
    loadChildren: () => import('./pages/detecmama/detecmama.module').then( m => m.DetecmamaPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-unidades',
    loadChildren: () => import('./pages/detecmama-unidades/detecmama-unidades.module').then( m => m.DetecmamaUnidadesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-unidades-detail/:id',
    loadChildren: () => import('./pages/detecmama-unidades-detail/detecmama-unidades-detail.module').then( m => m.DetecmamaUnidadesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-pacientes',
    loadChildren: () => import('./pages/detecmama-pacientes/detecmama-pacientes.module').then( m => m.DetecmamaPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-pacientes-detail/:id',
    loadChildren: () => import('./pages/detecmama-pacientes-detail/detecmama-pacientes-detail.module').then( m => m.DetecmamaPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-pac-archivo',
    loadChildren: () => import('./pages/detecmama-pac-archivo/detecmama-pac-archivo.module').then( m => m.DetecmamaPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos',
    loadChildren: () => import('./pages/mastos/mastos.module').then( m => m.MastosPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-unidades',
    loadChildren: () => import('./pages/mastos-unidades/mastos-unidades.module').then( m => m.MastosUnidadesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-unidades-detail/:id',
    loadChildren: () => import('./pages/mastos-unidades-detail/mastos-unidades-detail.module').then( m => m.MastosUnidadesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-pacientes',
    loadChildren: () => import('./pages/mastos-pacientes/mastos-pacientes.module').then( m => m.MastosPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-pacientes-detail/:id',
    loadChildren: () => import('./pages/mastos-pacientes-detail/mastos-pacientes-detail.module').then( m => m.MastosPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-pac-archivo',
    loadChildren: () => import('./pages/mastos-pac-archivo/mastos-pac-archivo.module').then( m => m.MastosPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/mastos-pac-archivo-detail/mastos-pac-archivo-detail.module').then( m => m.MastosPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos',
    loadChildren: () => import('./pages/colpos/colpos.module').then( m => m.ColposPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-unidades',
    loadChildren: () => import('./pages/colpos-unidades/colpos-unidades.module').then( m => m.ColposUnidadesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-unidades-detail/:id',
    loadChildren: () => import('./pages/colpos-unidades-detail/colpos-unidades-detail.module').then( m => m.ColposUnidadesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-pacientes',
    loadChildren: () => import('./pages/colpos-pacientes/colpos-pacientes.module').then( m => m.ColposPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-pacientes-detail/:id',
    loadChildren: () => import('./pages/colpos-pacientes-detail/colpos-pacientes-detail.module').then( m => m.ColposPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/detecmama-pac-archivo-detail/detecmama-pac-archivo-detail.module').then( m => m.DetecmamaPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-unidad-pacientes/:id',
    
    loadChildren: () => import('./pages/cito-unidad-pacientes/cito-unidad-pacientes.module').then( m => m.CitoUnidadPacientesPageModule), canActivate: [IdentityGuard],
  },
  {
    path: 'cito-unidad-pacientes-detail/:id',
    loadChildren: () => import('./pages/cito-unidad-pacientes-detail/cito-unidad-pacientes-detail.module').then( m => m.CitoUnidadPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-unidad-pac-archivo/:id',
    loadChildren: () => import('./pages/cito-unidad-pac-archivo/cito-unidad-pac-archivo.module').then( m => m.CitoUnidadPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'cito-unidad-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/cito-unidad-pac-archivo-detail/cito-unidad-pac-archivo-detail.module').then( m => m.CitoUnidadPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-unidad-pacientes/:id',
    loadChildren: () => import('./pages/vphs-unidad-pacientes/vphs-unidad-pacientes.module').then( m => m.VphsUnidadPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-unidad-pacientes-detail/:id',
    loadChildren: () => import('./pages/vphs-unidad-pacientes-detail/vphs-unidad-pacientes-detail.module').then( m => m.VphsUnidadPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-unidad-pac-archivo/:id',
    loadChildren: () => import('./pages/vphs-unidad-pac-archivo/vphs-unidad-pac-archivo.module').then( m => m.VphsUnidadPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'vphs-unidad-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/vphs-unidad-pac-archivo-detail/vphs-unidad-pac-archivo-detail.module').then( m => m.VphsUnidadPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-unidad-pacientes/:id',
    loadChildren: () => import('./pages/detecmama-unidad-pacientes/detecmama-unidad-pacientes.module').then( m => m.DetecmamaUnidadPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-unidad-pacientes-detail/:id',
    loadChildren: () => import('./pages/detecmama-unidad-pacientes-detail/detecmama-unidad-pacientes-detail.module').then( m => m.DetecmamaUnidadPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-unidad-pac-archivo/:id',
    loadChildren: () => import('./pages/detecmama-unidad-pac-archivo/detecmama-unidad-pac-archivo.module').then( m => m.DetecmamaUnidadPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'detecmama-unidad-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/detecmama-unidad-pac-archivo-detail/detecmama-unidad-pac-archivo-detail.module').then( m => m.DetecmamaUnidadPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-unidad-pacientes/:id',
    loadChildren: () => import('./pages/mastos-unidad-pacientes/mastos-unidad-pacientes.module').then( m => m.MastosUnidadPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-unidad-pacientes-detail/:id',
    loadChildren: () => import('./pages/mastos-unidad-pacientes-detail/mastos-unidad-pacientes-detail.module').then( m => m.MastosUnidadPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-unidad-pac-archivo/:id',
    loadChildren: () => import('./pages/mastos-unidad-pac-archivo/mastos-unidad-pac-archivo.module').then( m => m.MastosUnidadPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'mastos-unidad-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/mastos-unidad-pac-archivo-detail/mastos-unidad-pac-archivo-detail.module').then( m => m.MastosUnidadPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-unidad-pacientes/:id',
    loadChildren: () => import('./pages/colpos-unidad-pacientes/colpos-unidad-pacientes.module').then( m => m.ColposUnidadPacientesPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-unidad-pacientes-detail/:id',
    loadChildren: () => import('./pages/colpos-unidad-pacientes-detail/colpos-unidad-pacientes-detail.module').then( m => m.ColposUnidadPacientesDetailPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-unidad-pac-archivo/:id',
    loadChildren: () => import('./pages/colpos-unidad-pac-archivo/colpos-unidad-pac-archivo.module').then( m => m.ColposUnidadPacArchivoPageModule), canActivate: [IdentityGuard]
  },
  {
    path: 'colpos-unidad-pac-archivo-detail/:id',
    loadChildren: () => import('./pages/colpos-unidad-pac-archivo-detail/colpos-unidad-pac-archivo-detail.module').then( m => m.ColposUnidadPacArchivoDetailPageModule), canActivate: [IdentityGuard]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }