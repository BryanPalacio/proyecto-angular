import { Component } from '@angular/core';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent {

  name!: string;
  user_doc_num!: Number;
  position!: string;
  requested_days!: number;
  start_date!: Date;
  end_date!: Date;

  saveRequest(){
    //  guardar la solicitud
  }
}
