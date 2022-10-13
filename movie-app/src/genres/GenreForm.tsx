import {Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import {genreCreationDTO} from "./genres.model";


export default function GenreForm(props: genreFormProps) {
    return (
        <Formik initialValues={props.model} onSubmit={props.onSubmit}
                validationSchema={
                    Yup.object({
                        name: Yup.string().firstLetterUppercase().required('This field is required')
                    })
                }
        >


            {formikProps =>
                <Form>
                    <TextField field={'name'} displayName={'Name'}/>

                    <Button disabled={formikProps.isSubmitting} type={"submit"} className={'btn btn-primary'}>Save
                        changes</Button>
                    <Link to={'genres'} className={'btn btn-secondary'}>Cancel</Link>

                </Form>}


        </Formik>
    )
};

interface genreFormProps {
    model: genreCreationDTO;

    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void
}
