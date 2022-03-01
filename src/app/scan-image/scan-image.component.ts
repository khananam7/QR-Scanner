import { Component } from "@angular/core";

@Component({
	selector: 'app-scan-image',
	templateUrl: './scan-image.component.html',
	styleUrls: ['./scan-image.component.css']
})
export class ScanImageComponent {
	qrResultString: string = '';
	progressMessage: string = 'Scanning in progress. Please align the image within the box';
	data: string = 'Data from QR is: '

	clearResult(): void {
		this.qrResultString = '';
	}

	onCodeResult(resultString: string) {
		this.qrResultString = resultString;
	}
}