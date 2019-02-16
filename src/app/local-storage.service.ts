import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public StoreRegisterDetailsInLocalStorage(fg: FormGroup): void {
    this.storage.set('FIRST_NAME', fg.get('firstName').value);
    this.storage.set('LAST_NAME', fg.get('lastName').value);
    this.storage.set('EMAIL_ID', fg.get('emailID').value);
    this.storage.set('USER_NAME', fg.get('userName').value);
    this.storage.set('PASSWORD', fg.get('password').value);
  }

  public CheckUserCredentials(fg: FormGroup): boolean {

    if ( this.storage.get('USER_NAME') === fg.get('userName').value  &&
                 this.storage.get('PASSWORD') === fg.get('password').value ) {
      return true;
    }
    return false;
  }
}
