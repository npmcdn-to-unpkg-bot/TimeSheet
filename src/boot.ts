// Global deps
import 'reflect-metadata';
import 'zone.js';

import 'bootstrap/css/bootstrap.css!';
import './styles/style.css!';


import {bootstrap}  from 'angular2/platform/browser'
import {Shell} from './components/shell/shell.component'
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(Shell,
    [
        ROUTER_PROVIDERS
    ]
);
