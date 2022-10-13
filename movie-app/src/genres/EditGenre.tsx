import GenreForm from "./GenreForm";

export default function EditGenre() {
    return(
        <><h3>Edit genre</h3>

            <GenreForm model={{name: "Action"}} onSubmit={async value => {
                await new Promise(r => setTimeout(r, 1000));
                console.log(value)
            }
            }/>
        </>
    )
};