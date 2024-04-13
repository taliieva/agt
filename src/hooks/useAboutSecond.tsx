import axios from "axios";
import { useState } from "react"

export const useAboutSecond = () => {
    const [aboutSecond, setAboutSecond] = useState<TUseAboutSecond[]>([]);
    const fetchUseAboutSecond = async() => {
        try{
            const response = await axios.get("https://agiapi-3mjeldvoua-uc.a.run.app/user/About/second");
            setAboutSecond(response.data);
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    return {aboutSecond, fetchUseAboutSecond}
}