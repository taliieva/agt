import axios from "axios";
import { useState } from "react";

export const useSponsor = () => {
  const [sponsors, setSponsors] = useState<TUseSponsors[]>([]);
  const fetchAllSponsors = async () => {
    try {
      const response = await axios.get(
        "https://agiapi-3mjeldvoua-uc.a.run.app/user/Sponsor"
      );
      setSponsors(response.data.sponsors);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchAllSponsors, sponsors };
};
