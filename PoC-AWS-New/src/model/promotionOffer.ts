class PromtoionOffer {
    
    promotionId: string;
    name: string;
    minAge: number;
    maxAge: number;
    gender: string;
    jobStartTimeEpoch: number;
    jobEndTimeEpoch: number;
    creationTime: string;

    constructor(promotionId: string, name: string, minAge:number, maxAge:number, gender:string, jobStartTimeEpoch:number, jobEndTimeEpoch:number, creationTime:string){
        this.promotionId = promotionId;
        this.name = name;
        this.minAge= minAge;
        this.maxAge= maxAge;
        this.gender = gender;
        this.jobStartTimeEpoch = jobStartTimeEpoch;
        this.jobEndTimeEpoch = jobEndTimeEpoch;
        this.creationTime = creationTime;
    }

}

export default PromtoionOffer;