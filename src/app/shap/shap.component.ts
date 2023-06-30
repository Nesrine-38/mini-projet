import { Component } from '@angular/core';

@Component({
  selector: 'app-shap',
  templateUrl: './shap.component.html',
  styleUrls: ['./shap.component.css']
})
export class ShapComponent {
  width = 200;
  height = 200;
  color = 'white';

  edit = false;

  toggleEdit() {
    this.edit = !this.edit;
  }


}
