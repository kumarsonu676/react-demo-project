import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";
import { config } from "../../../config/config";

export default function Meta(props){

    var location = useLocation();  

    return (        
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta name="keywords" content={props.keyword} />
                <meta name="description" content={props.description} />
                <link rel="canonical" href={`${config.siteUrl}${location.pathname}`} />
            </Helmet>
        </>
    );
}