import axios from "axios";
import { useState } from "react";

export const useEvent = () => {
  const [allEvents, setAllEvents] = useState<TUseAllEvents[]>([]);
  const [recentEvents, setRecentEvents] = useState<TUseAllEvents[]>([]);
  const [eventDetails, setEventDetails] = useState<TUseAllEvents>();
  const fetchAllEvents = async () => {
    try {
      const response = await axios.get(
        "https://agiapi-3mjeldvoua-uc.a.run.app/user/Event"
      );
      setAllEvents(response.data.events);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRecentEvents = async () => {
    try {
      const response = await axios.get(
        "https://agiapi-3mjeldvoua-uc.a.run.app/user/Event/recent-events"
      );
      setRecentEvents(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchEventDetails = async(eventId) => {
    try{
      const response = await axios.get(`https://agiapi-3mjeldvoua-uc.a.run.app/user/Event/${eventId}`);
      setEventDetails(response.data)
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
  }
  return { allEvents, fetchAllEvents, recentEvents, fetchRecentEvents, eventDetails, fetchEventDetails };
};
