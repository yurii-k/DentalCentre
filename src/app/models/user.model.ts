export class UserModel {
  userName: string;
  fullName: string;
  password: string;
  email: string;
}

export class PatientModel extends UserModel {
  age?: any;
  history?: any;
  allergy?: any;
}

export class DentistModel extends UserModel {
  expirience?: any;
  clinic?: string;
}
