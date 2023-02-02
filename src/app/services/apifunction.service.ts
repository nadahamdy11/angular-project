import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService<T>{

  constructor(private http: HttpClient, @Inject(String) public ConfigUrl: string) {

  }
  get(): Observable<T> {
    return this.http.get<T>(this.ConfigUrl);
  }
  getById(id): Observable<T> {
    return this.http.get<T>(this.ConfigUrl + `/${id}`)

  }
  post(model: T): Observable<T> {
    return this.http.post<T>(this.ConfigUrl, model)
  }
  put(model: T, id): Observable<T> {
    return this.http.put<T>(this.ConfigUrl + `/${id}`, model)

  }

  delete(id): Observable<T> {
    return this.http.delete<T>(this.ConfigUrl + `/${id}`)
  }

  //edit
  edit(model:T,id):Observable<T>
  {
    return this.http.put<T>(this.ConfigUrl+`/${id}`,model)
  }
}

