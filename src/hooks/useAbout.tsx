import { useState } from "react"
import axios from "axios"
export const UseAboutFirst = () => {
    const [aboutFirst,setAboutFirst] = useState<TUseAbout>();

    const UseAbout = async() => {
        try{
            const response = await axios.get("http://melekkerim-001-site1.itempurl.com/user/About/first");
            setAboutFirst(response.data)
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    return {aboutFirst, UseAbout}
}