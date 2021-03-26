class TargetOffer{

    targedId: string;
    userId: string;
    promotionId: string;
    creationTime:string

    constructor(targedId:string, userId:string, promotionId:string,creationTime:string){
        this.targedId = targedId;
        this.userId = userId;
        this.promotionId = promotionId;
        this.creationTime = creationTime;
    }
}
export default TargetOffer;
