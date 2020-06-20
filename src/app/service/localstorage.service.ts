import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class LocalStorageService {

    private userProfile;
    // ******* Métodos para setar/buscar informações no LocalStorage do Browser **************************/

    setUser(obj) {
        // versão original
        localStorage.setItem('userProfile', JSON.stringify(obj));
    }

    getUser() {
        // versão original
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (!this.userProfile)
        this.userProfile = null;

        return this.userProfile;
    }

}
