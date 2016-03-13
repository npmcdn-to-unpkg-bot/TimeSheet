//noinspection TypeScriptUnresolvedVariable
import moment from 'moment';
import {Component, OnInit, Inject} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Grid} from '../grid/grid.component';


@Component({
    selector: 'sheet',
    template:
        `
        <button (click)="changeWeek(-1)" type="button" class="btn btn-secondary pull-left">Prev week</button>
        <button (click)="changeWeek(1)" type="button" class="btn btn-secondary pull-right">Next week</button>
        <grid [year]="_routeParams.params.year" [week]="_routeParams.params.week"></grid>
        `,
    directives: [Grid]
})

export class Sheet implements OnInit{
    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ){}

    ngOnInit(){
    }

    changeWeek(changeFactor){
        let changedDate = ( changeFactor == -1) ?
                moment().isoWeekYear(+this._routeParams.params.year).isoWeek(+this._routeParams.params.week).subtract(1, 'week') :
                moment().isoWeekYear(+this._routeParams.params.year).isoWeek(+this._routeParams.params.week).add(1, 'week');
        this._router.navigate( ['Sheet', { year: +changedDate.isoWeekYear(), week: +changedDate.isoWeek() }] );
    }
}