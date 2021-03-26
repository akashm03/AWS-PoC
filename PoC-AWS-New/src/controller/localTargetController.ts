import AWS from "aws-sdk";
const documentClient = new AWS.DynamoDB.DocumentClient();
const date = new Date();
const currTime = date.getTime();

export const localController = {

    //getJobStatus and jobStartTimeEpoch <= currentTime
    async getJobStatus() {
        const params: any = {
            TableName: "promotionoffer",
            KeyConditionExpression:"jobStatus =:jobS and jobStartTimeEpoch <= :currentTime",
            ExpressionAttributeValues: {
                ':jobS': "PENDING",
                ':currentTime': currTime
            },
        }
        return await documentClient.query(params).promise()
    },

    //find the id using minAge,maxAge and gender
    async findById() {
        const params: any = {
            TableName: "promotionoffer",
            FilterExpression: "minAge= :min and maxAge= :max and gender= :gen",
            ExpressionAttributeValues: {
                ":min": 25,
                ":max": 50,
                ":gen": "MALE"
            },
            ProjectionExpression: "promotionId"
        }
        return await documentClient.scan(params).promise()
    },

    //get first n job default =3
    async orderBy() {
        const params: any = {
            TableName: "promotionoffer",
            IndexName: "jobStatus-index",
            Limit: 3,
        //     KeyConditionExpression: "jobStatus = :jobS",
        //     ExpressionAttributeValues: {
        //     ":jobS": {"S": "PROCESSING"}
        //     },
        // ProjectionExpression: "prmotionID, jobStatus",
        // ScanIndexForward: false
        }
        return await documentClient.query(params).promise()
    },

    //after targetOffer created update the status as COMPLETED
    async updateTargetOffer(){
        const params : any ={
            TableName: "targetoffer",
            IndexName: "promotionId-index",
            Key:{
                promotionId:815895
            },
            UpdateExpression: "set jobStatus = :jobS",
            ExpressionAttributeValues: {
                ":jobS": "COMPLETED"
            },
            ReturnValues:"ALL_NEW"
        }
        return await documentClient.update(params).promise()
    }
}