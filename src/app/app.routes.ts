import { Routes, RouterModule } from '@angular/router';

import { ParserComponent } from './components/parser/parser.component';
import { MapperComponent } from './components/mapper/mapper.component';
import { NavComponent } from './nav/nav.component';
import { FlowComponent } from './components/flow/flow.component';
import { LookupComponent } from './components/lookup/lookup.component';

const app_routes: Routes = [
{
path: '',
component: NavComponent,
children: [
{ path: 'nav', component: NavComponent},
{ path: 'parser', component: ParserComponent},
{ path: 'mapper', component: MapperComponent},
{ path: 'flow', component: FlowComponent},
{ path: 'lookup', component: LookupComponent},
]}
];


export const app_routing = RouterModule.forRoot(app_routes);
