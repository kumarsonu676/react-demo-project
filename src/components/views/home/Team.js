import { useParams, useNavigate } from "react-router-dom";
import { users } from "../../../models/users";



export default function Team(){

    let navigate = useNavigate();
    let params = useParams();
    let teamDetails = users.filter((user) => {
        return user.id === +params.teamid;
    });

    const gotToTeamPage = () =>{
        navigate('/teams');
    };

    return (
        <>
            <h1 className="text-center">Team Page</h1>
            <div className="mt-3">

                <p>I M TEAM PAGE</p>

                {teamDetails.map((team, index) => {
                    return <p key={index}>
                        {team.desc}
                    </p>
                })}


                {/* <button className="btn btn-primary" onClick={gotToTeamPage}>Back</button> */}

                <button className="btn btn-primary" onClick={() => {navigate('/teams')}}>Back Me</button>
                
            </div>
        </>
    );
}