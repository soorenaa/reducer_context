import { Link } from "react-router-dom";

const Card = ({ data }) => {
    return (
        <>
            <div className="card" key={data.id}>
                <img src={data.urls.thumb} alt="pic" width="100%" />
                <div className="container">
                    <h4><b>{data.user.first_name}</b></h4>
                    <p>{data.user.instagram_username}</p>
                    {window.location.pathname != "/" ? "" :

                        <Link to={`singlepost/${data.id}`} >read more ...</Link>

                    }
                </div>
            </div>

        </>
    )
}

export default Card;