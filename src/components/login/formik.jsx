import {useFormik, Formik, Form, Field, ErrorMessage} from "formik";
import * as  yup from "yup";

export function FormikState(){
    return(
        <div className="container-fluid">
            <h3> Register User </h3>
            <Formik
                initialValues={{UserName:'', Age:0, Mobile:'', City:''}}

                validationSchema = {yup.object({
                    UserName: yup.string().required('Name Required').min(4,'Min 4 chars required'),
                    Age: yup.number().required('Age required').min(15,'Age should be minimum 15').max(35, 'Age should be maximum 35'),
                    Mobile: yup.string().required('Mobile required').matches(/\+91\d{10}/,'Invalid Mobile Number'),
                    City: yup.string().required('City is required')
                })}
                
                onSubmit ={(userDetails) => {console.log(userDetails)}}
                >
                <Form>
                <dl>
                    <dt>UserName</dt>
                    <dd><Field type="text" name="UserName"></Field></dd>
                    <dd><ErrorMessage name="UserName"></ErrorMessage></dd>
                    <dt>Age</dt>
                    <dd><Field type="number" name="Age"></Field></dd>
                    <dd><ErrorMessage name="Age"></ErrorMessage></dd>
                    <dt>Mobile</dt>
                    <dd><Field type="text" name="Mobile"></Field></dd>
                    <dd><ErrorMessage name="Mobile"></ErrorMessage></dd>
                    <dt>City</dt>
                    <dd><Field as="select" name="City">
                    <option >Select City</option>
                    <option>Hyderabad</option>
                    <option>Delhi</option></Field>
                    </dd>
                    <dd><ErrorMessage name="City"></ErrorMessage></dd>
                </dl>
                <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}