import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={'https://raw.githubusercontent.com/Nuriddin5/synelusermanagement/main/SynelTest-13-09/ClientApp/src/Images/pagenotfound.jpg'} width={589} alt="not found" className="rounded mx-auto d-block"/>
            <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}
export default NotFoundPage;