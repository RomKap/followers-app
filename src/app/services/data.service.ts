import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';


export class DataService {

    constructor(@Inject(String) private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            // .pipe(map((response) => response));    
            .pipe(map((response) => response as any));          
    }

    create(resource: any) {
        return this.http.post(this.url, resource)
            .pipe(map((response) => response as any));
    }

    update(resource: any) {
        return this.http.patch(this.url + resource[1].id, JSON.stringify({ isRead: true }))
            .pipe(map((response) => response as any));
    }

    delete(id: number) {
        ////Test to check error
        //return  throwError(new AppError('Org Error'));        

        return this.http.delete(this.url + id)
            .pipe(map((response) => response as any));
        //.pipe(catchError(this.handleError));        
    }

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
