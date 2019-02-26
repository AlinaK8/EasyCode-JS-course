import { SignupService } from './../services/signup.service';


export class SignupComponent {
    constructor() {
        this._signupservice = new SignupService(); 
    }

    render() {
       return `
       <h3>Signup</h3>
       <form name="signupForm">
       <div class="form-row col-md-8">
         <div class="form-group col-md-4">
           <label for="inputEmail4">Email</label>
           <input type="email" class="form-control" id="email" placeholder="Email">
         </div>
         <div class="form-group col-md-4">
           <label for="inputPassword4">Password</label>
           <input type="password" class="form-control" id="password" placeholder="Password">
         </div>
       
   
    
           <div class="form-group col-md-8">
               <label for="inputNickname">Nickname</label>
               <input type="text" class="form-control" id="nickname" placeholder="Godzilla">
           </div>
     
   
      
       <div class="form-group col-md-4">
           <label for="inputFirstName">First Name</label>
           <input type="text" class="form-control" id="firstName" placeholder="John">
        </div>
         <div class="form-group col-md-4">
           <label for="inputLastName">Last Name</label>
           <input type="text" class="form-control" id="lastName" placeholder="Pupkovich">
         </div>

   
       
        <div class="form-group col-md-8">
            <label for="inputPhone">Phone</label>
            <input type="text" class="form-control" id="Phone" placeholder="1234567">
        </div>
        <div class="form-group col-md-8">
           <label for="inputGender">Gender</label>
           <select id="gender" class="form-control">
             <option selected>Choose...</option>
             <option>Male</option>
             <option>Female</option>
           </select>
         </div>
      
   
       
       <div class="form-group col-md-4">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="city" placeholder="New York">
        </div>
        <div class="form-group col-md-4">
            <label for="inputCountry">Country</label>
            <input type="text" class="form-control" id="country" placeholder="USA">
        </div>
  
   
      
           <div class="form-group col-md-2">
               <label for="inputDay">Day of Birth</label>
               <input type="text" class="form-control" id="dayOfBirth" placeholder="1">
           </div>
           <div class="form-group col-md-2">
               <label for="inputMonth">Month of Birth</label>
               <input type="text" class="form-control" id="monthOfBirth" placeholder="january">
           </div>
           <div class="form-group col-md-2">
               <label for="inputYear">Year of Birth</label>
               <input type="text" class="form-control" id="yearOfBirth" placeholder="1900">
           </div>
       </div>
       <button type="submit" class="btn btn-primary">Sign up</button>
     </form>        
    `;
    }

    afterRender() {

        document.forms['signupForm'].addEventListener('submit', (e) => {
            e.preventDefault();
            const user = {
                email: e.target.elements['email'].value,
                password: e.target.elements['password'].value,
                nickname: e.target.elements['nickname'].value,
                firstName: e.target.elements['firstName'].value,
                lastName: e.target.elements['lastName'].value,
                phone: e.target.elements['phone'].value,
                gender: e.target.elements['gender'].value,
                city: e.target.elements['city'].value,
                country: e.target.elements['country'].value,
                dayOfBirth: e.target.elements['dayOfBirth'].value,
                monthOfBirth: e.target.elements['monthOfBirth'].value,
                yearOfBirth: e.target.elements['yearOfBirth'].value
            }
            
            this._signupservice.signup(user)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
            });             

        });
    }
}