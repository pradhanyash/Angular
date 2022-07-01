import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  title = "Write us Anytime";
  contactForm:FormGroup;

  constructor(private fb:FormBuilder) {
    // this.contactForm = new FormGroup({
    //   first_name : new FormControl('', [Validators.required]),
    //   last_name : new FormControl('')
    // });
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      first_name : new FormControl('', [Validators.required]),
      last_name : new FormControl(''),
      address: new FormGroup({
        address1 : new FormControl('', [Validators.required]),
        address2 : new FormControl('')
      })      
    });
  }

  formSubmit(data:any){
    console.log("clicked submit");
    console.log(data);
  }

}

