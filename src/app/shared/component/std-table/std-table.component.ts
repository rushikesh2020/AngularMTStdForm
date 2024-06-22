import { Component, Input, OnInit } from '@angular/core';
import { stdInfo } from '../../model/stdInfo.interface';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss'],
})
export class StdTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() getFormArray!: Array<stdInfo>;
}
