
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}
  set(userFromDatabase) {
    localStorage.setItem('user', JSON.stringify(userFromDatabase));
  }
  destroy() {
    localStorage.removeItem('user');
  }
}
