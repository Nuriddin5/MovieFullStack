import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";

export default function CreateGenre() {

    // const navigate = useNavigate();

    return (
        <><h3>Create genre</h3>

            <Formik initialValues={{
                name: ''
            }} onSubmit={values =>
                console.log(values)
            }
                    validationSchema={
                        Yup.object({
                            name: Yup.string().firstLetterUppercase().required('This field is required')
                        })
                    }
            >


                <Form>
                    <TextField field={'name'} displayName={'Name'}/>

                    <Button type={"submit"} class={'btn btn-primary'}>Save changes</Button>
                    <Link to={'genres'} className={'btn btn-secondary'}>Cancel</Link>

                </Form>

            </Formik>

        </>
    )
}