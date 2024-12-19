export interface Ticket {
    id: string;
    subject: string;
    situation: string | null;
    status: string | null;
    statusDesc: string | null;    
    organizationName: string | null;   
    operatorName: string | null;    
    creationDate: string;
  }
  
  export interface TicketResponse {
    data: Ticket[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
  }
  