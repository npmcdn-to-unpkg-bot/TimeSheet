import moment from 'moment';
import {Component, Input, OnInit} from 'angular2/core';

@Component({
    selector: 'grid',
    templateUrl: 'src/components/grid/grid.template.html'
})

export class Grid implements OnInit{
    @Input() year;
    @Input() week;
    weekdays = {
            mon: 0,
            tue: 0,
            wed: 0,
            thu: 0,
            fri: 0,
            sat: 0,
            sun: 0
            };

    constructor(){

    }

    ngOnInit(){
        this.deriveWeekdays(this.year, this.week)
    }

    deriveWeekdays(year:any, week:any):void {
        Object.keys(this.weekdays).forEach((v,i) => {
            let newDate = moment().isoWeekYear(year).isoWeek(week).isoWeekday(i+1);
            this.weekdays[v] = newDate.format('D-MM');
        })
    }
}
