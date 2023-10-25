import { Injectable } from '@angular/core';
import { QUOTES } from '../quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotes: string[] = QUOTES;
  private currentQuoteIndex = 0;

  constructor() {}

  getCurrentQuote(): string {
    return this.quotes[this.currentQuoteIndex];
  }

  getNextQuote(): string {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    return this.getCurrentQuote();
  }

  startQuoteRotation(interval: number): void {
    setInterval(() => {
      this.getNextQuote();
      
    }, interval);
    
  }
}
