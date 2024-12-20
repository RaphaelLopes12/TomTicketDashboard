import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../core/services/ticket.service';
import { Ticket } from '../../core/models/ticket.model';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,  
  ],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'subject',
    'situation',
    'statusDesc',
    'organizationName',
    'operatorName',
    'creationDate',
  ];
  dataSource = new MatTableDataSource<Ticket>();
  totalTickets = 0;
  pageSize = 10;
  currentPage = 1;
  sortField = 'creationDate';
  sortOrder = 'desc';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  loadTickets(): void {
    const page = this.currentPage;

    this.ticketService.getTickets(page, this.pageSize, this.sortField, this.sortOrder).subscribe(
      (response) => {
        this.dataSource.data = response.data;
        this.totalTickets = response.total;
      },
      (error) => {
        console.error('Erro ao carregar os tickets:', error);
        this.dataSource.data = [];
      }
    );
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadTickets();
  }
}
