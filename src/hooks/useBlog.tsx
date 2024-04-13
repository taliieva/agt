import axios from "axios";
import { useState } from "react"

export const useBlog = () => {
    const [allBlogs, setAllBlogs] = useState<TUseAllBlogs[]>([]);
    const [recentBlogs, setRecentBlogs] = useState<TUseAllBlogs[]>([]);
    const [blogDetails, setBlogDetails] = useState<TUseAllBlogs>()
    const fetchAllBlogs = async() => {
        try{
            const response = await axios.get("https://agiapi-3mjeldvoua-uc.a.run.app/user/Blog")
            setAllBlogs(response.data.blogs);
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }

    const fetchRecentBlogs = async() => {
        try{
            const response = await axios.get("https://agiapi-3mjeldvoua-uc.a.run.app/user/Blog/recent-blogs")
            setRecentBlogs(response.data)
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }

    const fetchBlogDetails = async(blogId) => {
        // const { blogId } = payload   
        try{
            const response = await axios.get(`https://agiapi-3mjeldvoua-uc.a.run.app/user/Blog/${blogId}`);
            setBlogDetails(response.data)
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    return {allBlogs, fetchAllBlogs, fetchRecentBlogs, recentBlogs, fetchBlogDetails, blogDetails}
}