import axios from "axios";
import { useState } from "react"

export const useTeams = () => {
    const [teams, setTeams] = useState<TUseTeams[]>([]);
    const fetchTeams = async() => {
        try{
            const response = await axios.get("https://agiapi-3mjeldvoua-uc.a.run.app/user/Team");
            setTeams(response.data.teams);
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    return {teams, fetchTeams}
}