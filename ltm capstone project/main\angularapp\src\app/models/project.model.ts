import { User } from "./user.model";

export interface Project {
    projectId?:number;
    projectTitle?:string;
    projectDescription?:string;
    startDate?:Date;
    endDate?:Date;
    frontEndTechStack?:string;
    backendTechStack?:string;
    databaseStack?:string;
    status?:string;
    user?:User;
}