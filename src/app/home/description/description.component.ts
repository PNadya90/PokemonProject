import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  id:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');
    paramId ? this.id = +paramId: 0;
  }

}
