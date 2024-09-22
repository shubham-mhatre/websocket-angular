import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IRNService {

  constructor(private http: HttpClient) { }

  generateIRN(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/irn/generateIRN', data);
  }

  cancelIRN(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/irn/cancelIRN', data);
  }

  // async generateIRN(data: any): Promise<any> {
  //   return firstValueFrom(this.http.post('http://localhost:8080/irn/generateIRN', data));
  // }

  // async cancelIRN(data: any): Promise<any> {
  //   return firstValueFrom(this.http.post('http://localhost:8080/irn/cancelIRN', data));
  // }
}
