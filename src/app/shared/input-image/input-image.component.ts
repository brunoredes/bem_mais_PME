import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * Custom input field to add an image;
 *
 * @author Wesley Alves
 */
@Component({
  selector: 'input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputImageComponent),
      multi: true
    }
  ]
})
export class InputImageComponent implements OnInit, ControlValueAccessor {
  @Input()
  placeholder = 'edituser-arraste';

  _fileReader: FileReader;
  _imageData: SafeUrl = '';
  _imageName = '';
  _disable = false;

  /**
   * Issues the event to update value accessors;
   */
  _propagateChange = (_: any) => {};

  constructor(private _domSantizer: DomSanitizer) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._fileReader = new FileReader();
    this._addEnventListerner();
  }

  /**
   * Change image event on click;
   * @param event
   */
  _changeImage(event) {
    const file = event.target.files[0];
    this._fileReader.readAsDataURL(file);
    this._imageName = file.name;
  }

  /**
   * Captures the image drop event;
   */
  onDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    this._fileReader.readAsDataURL(file);
    this._imageName = file.name;
  }

  onDragOver(event) {
    event.preventDefault();
  }

  writeValue(value) {
    this._imageData = value;
  }

  registerOnChange(fn) {
    this._propagateChange = fn;
  }

  registerOnTouched(fn: any) {}

  /**
   * Disables the input to block the image change;
   * @param isDisabled boolean
   */
  setDisabledState?(isDisabled: boolean) {
    this._disable = isDisabled;
  }

  /**
   * Set the function to capture the load event, to transform the file into base64
   */
  private _addEnventListerner() {
    this._fileReader.addEventListener('load', (event: any) => {
      this._imageData = this._domSantizer.bypassSecurityTrustUrl(
        event.target.result
      );
      this._propagateChange(this._imageData);
    });
  }
}
