import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


export function FormikDemo(){

   

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik
              initialValues={{UserName:'', Mobile:'', Age:0, City:''}}

              validationSchema={yup.object({
                  UserName: yup.string().required('Name Required').min(4, 'Name too short'),
                  Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile'),
                  Age: yup.number().required('Age Required').min(15, 'Age min 15').max(30, 'Age max 30')
              })}

              onSubmit={(userDetails)=>{console.log(userDetails)}}
            >
               
                {
                    formik =>
                    <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd> <Field type="text" name="UserName" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                        <dt>Mobile</dt>
                        <dd> <Field type="text" name="Mobile" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                        <dt>Age</dt>
                        <dd> <Field type="number" name="Age" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Age" /> </dd>
                        <dt>City</dt>
                        <dd>
                          <Field as="select" name="City">
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                          </Field>
                        </dd>
                    </dl>
                    <button disabled={!formik.isValid} type="submit"> Register </button>
                    <button style={{display:(formik.dirty)?'inline':'none'}} type="button" className="ms-3"> Save </button>
                </Form>
                   
                }
            </Formik>
           
        </div>
    )
}