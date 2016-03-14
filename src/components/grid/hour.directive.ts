import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[hour]',
    host: {
        '(blur)': 'onBlur()'
    }
})
export class HourDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
        console.log(el)
    }

    onBlur(){
        console.log(this.el.nativeElement.value)
        this.el._appElement.parentView.context.weekdays.total += this.el.nativeElement.value;
    }
}