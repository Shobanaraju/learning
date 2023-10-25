import { Component } from '@angular/core';
import { QuoteService } from '../services/quote.service';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  currentQuote!: string;

  constructor(private quoteService: QuoteService){

  }

  ngOnInit() {
    this.currentQuote = this.quoteService.getCurrentQuote();
    this.quoteService.startQuoteRotation(30000); // Rotate quotes every 10 minutes

  }
 
  openDrawer(): void {
    const myOffcanvas = new bootstrap.Offcanvas(document.getElementById('drawer'));
    myOffcanvas.show();
  }
}
  