import { useState } from "react"
import axios from "axios"
export const useAboutFirst = () => {
    const [aboutFirst,setAboutFirst] = useState<TUseAbout[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const fetchUseAbout = async() => {
        try{
            setIsLoading(true)
            const response = await axios.get("http://melekkerim-001-site1.itempurl.com/user/About/first");
            setAboutFirst(response.data)
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }
    return {aboutFirst, fetchUseAbout, isLoading}
}