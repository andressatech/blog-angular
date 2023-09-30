import { Component, Input, OnInit } from '@angular/core';
import {dataFake} from '../../components/data/dataFake'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {

  }

  setValuesToCard(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.cardTitle = result.title
    this.photoCover = result.photoCover
  }

}
