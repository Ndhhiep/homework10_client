import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<Item>();

  constructor() {}

  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  addItem(value: Item) {
    this.newItemEvent.emit(value);
    console.log(value);
  }

  ItemForm!: FormGroup;

  ngOnInit(): void {
    this.ItemForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        'http://code.slicecrowd.com/labs/4/images/t-shirt.png'
      ),
    });
  }
}
