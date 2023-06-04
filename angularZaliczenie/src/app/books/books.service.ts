import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Krzyżacy',
        author: 'Henryk Sienkiewicz',
        image:
          'https://ecsmedia.pl/c/krzyzacy-b-iext121679077.jpg',
        amount: 30,
      },
      {
        name: 'Ogniem i Mieczem',
        author: 'Henryk Sienkiewicz',
        image: 'https://img.tantis.pl/image/2adb849e-bfcc-40f6-9e77-44a0f0966128/1024x768/webp',
        amount: 20,
      },
      {
        name: 'Dziady',
        author: 'Adam Mickiewicz',
        image:
          'https://www.greg.pl/imgs/covers/380/Dziady_lkodz.jpg',
        amount: 33,
      },
      {
        name: 'Wesele',
        author: 'Bolesław Prus',
        image:
          'https://s.znak.com.pl//files/covers/card/f1/T291119.jpg',
        amount: 15,
      },
      {
        name: 'Przedwiośnie',
        author: 'Stefan Żeromski',
        image:
          'https://www.greg.pl/imgs/covers/380/Przedwiosnie_lopr.jpg',
        amount: 23,
      },
      {
        name: 'Zbrodnia i Kara',
        author: 'Fiodor Dostojewski',
        image:
          'https://www.greg.pl/imgs/covers/380/Zbrodnia-i-kara_lozb.jpg',
        amount: 35,
      },
    ];
  }
  
 
}
