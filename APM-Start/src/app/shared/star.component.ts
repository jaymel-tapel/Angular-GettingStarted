import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges() : void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClick.emit(`The rating ${this.rating}`);
    }
}