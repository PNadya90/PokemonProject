import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-type',
  templateUrl: './full-type.component.html',
  styleUrls: ['./full-type.component.scss']
})
export class FullTypeComponent implements OnInit {
  id:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');
    paramId ? this.id = +paramId: 0;
  }

}
