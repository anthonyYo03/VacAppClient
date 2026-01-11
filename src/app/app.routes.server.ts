import { RenderMode, ServerRoute } from '@angular/ssr';
// import { getCarPrerenderParams, getPlanePrerenderParams, getBoatPrerenderParams } from './prerender-params';


export const serverRoutes: ServerRoute[] = [




  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
