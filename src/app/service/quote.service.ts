import { Observable } from 'rxjs/Observable';
import { Quote } from './../domain/quote.model';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';




@Injectable()
export class QuoteService {
  constructor(private http: Http, @Inject('BASE_CONFIG') private base_config) { }

  getQuote(): Observable<Quote> {
    const uri = `${this.base_config.uri}/quotes/${Math.floor(Math.random() * 10)}`
    return this.http.get(uri)
    // .debug('quote:') //不知道为什么报错
    .map(res => res.json() as Quote)
  }
}
