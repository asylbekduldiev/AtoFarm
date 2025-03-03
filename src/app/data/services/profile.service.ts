import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Pageble } from '../interfaces/pageble.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getSubscribers(): import("rxjs").Observable<Profile[]> {
    throw new Error('Method not implemented.');
  }
  http = inject(HttpClient);

  baseApiUrl = "https://icherniakov.ru/yt-course/"

  getTestAccount() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }


  getSubscribersShortlList(){
    return this.http.get<Pageble<Profile[]>>(`${this.baseApiUrl}account/subscribers/`)
    .pipe(
      map(res => ({
        ...res,
        items: res.items.slice(0, 3)
      }))
    )
  }

  getMe(){
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
  }
}
