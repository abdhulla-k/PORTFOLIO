import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { SectionLayoutComponent } from '../../../layouts/section-layout/section-layout.component';

import { CurrentDateTime } from '../../../types/current-date-time';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [SectionLayoutComponent],
	providers: [DatePipe],
})
export class HeaderComponent {
	currentDateTime: CurrentDateTime = {} as CurrentDateTime;

	constructor(private datePipe: DatePipe) { }

	ngOnInit(): void {
		this.updateCurrentDateTime();
		setInterval(() => {
			this.updateCurrentDateTime();
		}, 1000 * 30);
	}

	updateCurrentDateTime(): void {
		const now = new Date();

		this.currentDateTime = {
			day: this.datePipe.transform(now, 'EEEE') || '',
			month: this.datePipe.transform(now, 'MMMM') || '',
			year: this.datePipe.transform(now, 'yyyy') || '',
			date: this.datePipe.transform(now, 'dd') || '',
			time: this.datePipe.transform(now, 'h:mm a') || ''
		};
	}
}
