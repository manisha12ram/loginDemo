import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface Academy {
  qualification: string,
  instituteName: string,
  course: string,
  courseType: string,
  board: string,
  schoolMedium: string,
  specialization: string,
  grade: string,
  yearOfPassing: string,
  sequenceOrder: number
}

// const ELEMENT_DATA: UsersData[] = [
//   { id: 1560608769632, name: 'Artificial Intelligence' },
//   { id: 1560608796014, name: 'Machine Learning' },
//   { id: 1560608787815, name: 'Robotic Process Automation' },
//   { id: 1560608805101, name: 'Blockchain' }
// ];

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  education: any;
  educationstr: any;
  educationList: any;
  displayedColumns: string[] = ['sequenceOrder', 'qualification', 'board', 'schoolMedium', 'course', 'specialization',
  'instituteName', 'grade', 'yearOfPassing', 'action'];
   dataSource: Array<Academy>=[];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;


  registerForm: FormGroup;
  submitted: Boolean = false;
  acadForm: FormArray;
  
  secondaryForm: FormGroup;
  higsecForm: FormGroup;
  ugForm: FormGroup;
  pgForm: FormGroup;
  phdForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,
        Validators.pattern(/^[a-zA-Z\\s]*$/)])],
      emailId: ['', Validators.compose([Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      mobileNo: ['', Validators.compose([Validators.required,
      Validators.pattern(/^(?:\+971|00971|0)(?:2|3|4|6|7|9|50|51|52|55|56)[0-9]{7}$/)])],
      password: ['', [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      userName: ['', Validators.compose([Validators.required,
      Validators.pattern(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)])],
      firstName: ['', Validators.compose([Validators.required,
      Validators.pattern(/^[a-zA-Z\\s]*$/)])],
      middleName: ['', Validators.compose([Validators.required,
      Validators.pattern(/^[a-zA-Z\\s]*$/)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.pattern(/^[a-zA-Z\\s]*$/)])],
      emiratesId: ['', Validators.compose([Validators.required,
      Validators.pattern(/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/)])],
      sisNumber: ['', Validators.required],
      academy: this.formBuilder.array([])
    },

      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      });
    this.secondaryForm = this.formBuilder.group({
      qualification: [''],
      instituteName: [''],
      course: [''],
      courseType: [''],
      board: [''],
      schoolMedium: [''],
      specialization: [''],
      grade: [''],
      yearOfPassing: [''],
      sequenceOrder: ['']
      });
    this.higsecForm = this.formBuilder.group({
      qualification: [''],
      instituteName: [''],
      course: [''],
      courseType: [''],
      board: [''],
      schoolMedium: [''],
      specialization: [''],
      grade: [''],
      yearOfPassing: [''],
      sequenceOrder: ['']
    });
    
    this.ugForm = this.formBuilder.group({
      qualification: [''],
      instituteName: [''],
      course: [''],
      courseType: [''],
      board: [''],
      schoolMedium: [''],
      specialization: [''],
      grade: [''],
      yearOfPassing: [''],
      sequenceOrder: ['']
    });
    this.pgForm = this.formBuilder.group({
      qualification: [''],
      instituteName: [''],
      course: [''],
      courseType: [''],
      board: [''],
      schoolMedium: [''],
      specialization: [''],
      grade: [''],
      yearOfPassing: [''],
      sequenceOrder: ['']
    });
  
    this.phdForm = this.formBuilder.group({
      qualification: [''],
      instituteName: [''],
      course: [''],
      courseType: [''],
      board: [''],
      schoolMedium: [''],
      specialization: [''],
      grade: [''],
      yearOfPassing: [''],
      sequenceOrder: ['']
    })
    this.educationList = [{ label: 'Secondary', value: 'secondary', order: 1, form: this.secondaryForm },
    { label: 'Higher secondary', value: 'higsec', order: 2, form: this.higsecForm },
    { label: 'undergraduate', value: 'ug', order: 3, form: this.ugForm},
    { label: 'postgraduate', value: 'pg', order: 4, form: this.pgForm },
    { label: 'P.hD/Doctorate', value: 'phd', order: 5, form: this.phdForm }]
  console.log(this.educationList);
  }
  get f() { return this.registerForm.controls; }
  get academy() {
    return this.registerForm.controls.academy as FormArray
  }
  onsubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return
    }
    console.log(this.registerForm.value)
  }

  onChange(value) {
    
    console.log(value);
    this.educationstr = value;
    this.education = this.educationList.find(x => {
      return x.value === value
    })
    this.education.form.controls.qualification.setValue(this.education.label)
    this.education.form.controls.sequenceOrder.setValue(this.education.order)
    
  }

  openDialog(action, obj) {
    if (action === 'Add') {
      
      let edu = this.academy.controls.filter((grp: FormGroup) => {
        return grp.controls.qualification.value === this.education.form.controls.qualification.value;
      });

      if (edu.length === 0) {// let edu = this.educationList.find(x => x.value == this.educationForm.controls.qualification.value);
        (<FormArray>this.registerForm.get('academy')).push(this.education.form);
        this.addRowData(this.education.form.value);
      }
      else{
        alert("education already added");
      }
    }
    else if(action === 'Delete')
    {
      this.deleteRowData(obj)
     this.academy.controls.forEach((edg: FormGroup,i)=> {
       if(edg.controls.sequenceOrder.value=== obj.sequenceOrder)
       {
        (<FormArray>this.registerForm.get('academy')).removeAt(i);
       }
     })
    }
    
    //   obj.action = action;
    //   const dialogRef = this.dialog.open(DialogBoxComponent, {
    //     width: '250px',
    //     data:obj
    //   }
    // );

    //   dialogRef.afterClosed().subscribe(result => {
    //     if(result.event == 'Add'){
    //       this.addRowData(result.data);
    //     }else if(result.event == 'Update'){
    //       this.updateRowData(result.data);
    //     }else if(result.event == 'Delete'){
    //       this.deleteRowData(result.data);
    //     }
    //   });
  }

  addRowData(row_obj) {
    // var d = new Date();
    // this.dataSource.push({
    //   id: d.getTime(),
    //   name: row_obj.name
    // });
    let d = <Academy>row_obj
    this.dataSource.push(d);
    this.table.renderRows();

  }
  // updateRowData(row_obj) {
  //   this.dataSource = this.dataSource.filter((value, key) => {
  //     if (value.sequenceOrder == row_obj.sequenceOrder) {
  //         value = row_obj;
  //     }
  //     return true;
  //   });
  // }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.sequenceOrder != row_obj.sequenceOrder;
    });
  }
}



export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    if (
      matchingControl.errors &&
      !matchingControl.errors.confirmPasswordValidator
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);

    }
  };
}

