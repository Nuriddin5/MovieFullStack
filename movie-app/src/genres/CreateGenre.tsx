import Button from "../utils/Button";
import {useNavigate} from "react-router-dom";

export default function CreateGenre() {

    const navigate = useNavigate();

    return (
        <><h3>Create genre</h3>

            <Button onClick={()=>{
                //saving in db
                navigate('/genres')
            }} class={'btn btn-primary'}>Save changes</Button>

            </>
            )
          }