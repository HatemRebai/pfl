import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-addsujet',
  templateUrl: './addsujet.component.html',
  styleUrls: ['./addsujet.component.css']
})
export class AddsujetComponent implements OnInit {


   addForm = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),

  });

  constructor(private service: ServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() { }
  addsujet() {

    this.service.addSujet(this.addForm.value.personne).subscribe(
      data => {
      });
  }
  }

