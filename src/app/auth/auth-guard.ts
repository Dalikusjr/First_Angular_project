import { CanActivateFn ,Router} from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(Auth);
  const router = inject(Router);
  console.log("AuthGuard est appelé pour accéder à l'URL "+ state.url);
  if (auth.estConnecte) return true;
  return router.navigate(['/login']);
};
