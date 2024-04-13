type TUseAbout = {
    id: number,
    title: string,
    subTitle: string,
    description: string,
    imageUrl: string
}
type TUseAboutSecond = {
    id: number;
    title: string;
    date: string;
}

type TUseAllBlogs = {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    author: string;
    createdDate: string
}

type TUseAllEvents = {
    id:number;
    title: string;
    description: string;
    location: string;
    author: string;
    startDate: string;
    endDate: string;
    imageUrl: string
}

type TUseSponsors = {
    id: number;
    logoUrl: string
}

type TUseTeams = {
    id: number;
    name: string;
    surname: string;
    imageUrl: string;
    position: string;
    description: string
}