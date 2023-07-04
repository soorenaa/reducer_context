import { useParams } from "react-router-dom";
import Card from "../imagebox/Card";
import { useEffect, useState } from "react";
import { getSinglePost } from "../../api/services";
import Skeleton from "../skeleton/Skeleton";


const SinglePost = () => {
    const [dataSinglePost, setDataSinglePost] = useState({});
    const [loading, setLoading] = useState(true)
    const param = useParams();

    useEffect(() => {
        setLoading(true)
        getSinglePost(param.id)
            .then((result) => {
                console.log("sdfsdfsdfsdfsd", result.data);
                setDataSinglePost(result.data);
                setLoading(false)

            }).catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])

    console.log(dataSinglePost);
    return (
        <>
            {loading ? <Skeleton /> : (
                <Card data={dataSinglePost} />
            )}
<Skeleton />
        </>
    )

}

export default SinglePost;
