import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserLoggedService {

    logged = true;
    logout = false
    private change = new Subject<boolean>();

    Loading$ = this.change.asObservable();
    ngOnInit() {
    }

    Logged() {
        this.change.next(this.logged);
    }

    Logout() {
        this.change.next(this.logout);
    }
}
