import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  

  constructor(private showDataService: ShowDataService) {
    class show = Show {
      return null;
    }
    this.show = new Show(null, null);
    
  }

  ngOnInit() {}
}
