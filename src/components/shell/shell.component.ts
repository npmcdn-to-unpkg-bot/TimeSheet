import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Week} from '../week/week.component';
import {Login} from '../login/login.component';
import {Sheet} from '../sheet/sheet.component';
//
@Component({
    selector: 'Shell',
    templateUrl: 'src/components/shell/shell.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/week',     name: 'Week',       component: Week },
    { path: '/login',    name: 'Login',      component: Login },
    { path: '/sheet/:year/:week',    name: 'Sheet',      component: Sheet }
])

export class Shell { }

