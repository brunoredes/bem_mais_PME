import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserIdleService } from 'angular-user-idle';
import { UtilService } from 'app/helpers/utils';
import { LoginModel } from 'app/models/login.model';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const LOCAL_STORAGE_CURRENT_USER = 'userProfile';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _toastrService: ToastrService,
    private _utilService: UtilService,
    private _userIdle: UserIdleService,
    private _router: Router
  ) {}

  login(loginData: LoginModel, stayLogged: boolean) {
    let obs$ = this._httpClient.post<any>(
      `${environment.api}/Login`,
      loginData
    );

    /* MOCK */
    // TODO: remover quando integrar com API
    obs$ = this._httpClient.get(`./assets/JSON/Login/LOGIN_RESPONSE.json`);

    obs$.subscribe(res => {
      const user = res.data.user.find(
        user =>
          user.name === loginData.username && user.password === loginData.password
      );
      if (user) {
        this._setLocalUserProfile(user);
        if (!stayLogged) this._startWatching();
        this._toastrService.success(this._utilService.getauthLogado());
        this._router.navigateByUrl('private');
      } else {
        this._toastrService.error(this._utilService.getauthInvalido());
      }
    });
  }

  /**
   * function is used to create login user
   * @param value data user
   */
  signUpUserProfile(value: FormGroup) {
    const userRegistered = value.getRawValue();
    const obs$ = this._httpClient.post<any>(
      `${environment.api}/Users`,
      userRegistered
    );
    this._toastrService.success('Conta criada!');
  }

  // TODO: fazer chamada a API para o reset da senha
  resetPassword(value) {
    this._toastrService.success(this._utilService.getauthEmailenviado());
  }

  logOut() {
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_USER);
    this._toastrService.error(this._utilService.getauthDeslogado());
    this._router.navigateByUrl('login');
  }

  isAuthenticatedAndValid(): boolean {
    return !!localStorage.getItem(LOCAL_STORAGE_CURRENT_USER);
  }

  /*
   * setLocalUserProfile function is used to set local user profile data.
   */
  private _setLocalUserProfile(value) {
    localStorage.setItem(LOCAL_STORAGE_CURRENT_USER, JSON.stringify(value));
  }

  private _startWatching() {
    this._userIdle.startWatching();

    this._userIdle.onTimerStart().subscribe();

    this._userIdle.onTimeout().subscribe(() => {
      localStorage.removeItem(LOCAL_STORAGE_CURRENT_USER);
      this._toastrService.error(this._utilService.getauthSessaoExpirada());
      this._userIdle.stopWatching();
    });
  }

  get currentUser() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENT_USER));
  }
}
