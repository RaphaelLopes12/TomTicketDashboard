import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketResponse } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'https://api.raphaelferreiralopes.com.br/api/tickets';

  constructor(private http: HttpClient) {}

  getTickets(page: number, size: number): Observable<TicketResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<TicketResponse>(this.apiUrl, { params });
  }
}
