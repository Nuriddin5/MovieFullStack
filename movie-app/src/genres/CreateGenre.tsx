import GenreForm from "./GenreForm";

export default function CreateGenre() {

    // const navigate = useNavigate();

    return (
        <><h3>Create genre</h3>

            <GenreForm model={{name: ""}} onSubmit={async value => {
                await new Promise(r => setTimeout(r, 1000));
                console.log(value)
            }
            }/>

        </>
    );
}