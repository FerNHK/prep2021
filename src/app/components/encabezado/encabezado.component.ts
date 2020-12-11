import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeFontSize(value: number) {
    document.body.style.fontSize = value + 'px';
    console.log(value);
  }

}
