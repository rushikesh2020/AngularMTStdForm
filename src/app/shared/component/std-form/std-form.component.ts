import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { stdInfo } from '../../model/stdInfo.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss'],
})
export class StdFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() StdInfoEmit = new EventEmitter<stdInfo>();

  onFormSubmit(info: NgForm) {
    this.StdInfoEmit.emit(info.value);
  }
}
