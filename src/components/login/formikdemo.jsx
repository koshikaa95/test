import { useFormik } from "formik";
import { error } from "jquery";

export function FormikDemo(){

    function ValidateUser(userDetails){
        console.log(userDetails, '@@userDetails');
        var errors = {UserName:'', Age:0, City: '', Gender:''};
        if(userDetails.UserName.length===0){
            
            errors.UserName= 'UserName Required';
        } else{
            if(userDetails.UserName.length<4){
                errors.UserName='Min 4 Chars Required for UserName';
            }else{
                errors.UserName = '';
            }
        }

        if(userDetails.Age.length===0){
            errors.Age = 'Age is required';
        }else{
            console.log(userDetails.age, '@@@@');
            if(isNaN(userDetails.age)){
                
                errors.Age = 'Age should be a number';
            }else{
                errors.Age = '';
                }
        }

        if(userDetails.City == '-1'){
            errors.City = 'Please select City';
        } else{
            errors.City = '';
        }

        if(userDetails.Gender = ''){
            errors.Gender = 'Please select Gender';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName:'',
            Age: 0,
            City:'',
            Gender:''
        },
        validate: ValidateUser,
        onSubmit: (userDetails) => {
            console.log(userDetails, '@@@@@@123456');
        }
    })
    return(
        <div className="container-fluid">
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" className="form-control"></input></dd>
                    <dd>{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" className="form-control"></input></dd>
                    <dd>{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City" className="form-select">
                            <option value= "-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd>{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd><input type="radio" onChange={formik.handleChange} name="Gender" className="form-check-input me-2" value="Male"/><label className="me-2"> Male</label>
                    <input type="radio" onChange={formik.handleChange} name="Gender" className="form-check-input me-2" value="Female"/><label> Female</label></dd>
                    <dd>{formik.errors.Gender}</dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    )
}