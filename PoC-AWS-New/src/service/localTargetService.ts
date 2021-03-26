import { localController } from "../controller/localTargetController";

export const service = {
    getStatus(){
       return localController.getJobStatus();
    },
    
    find(){
        return localController.findById();
    },
    order(){
        return localController.orderBy();
    },
    updateTarget(){
        return localController.updateTargetOffer();
    }
};

// class localTargetService{
//     private getStatus(){
//         return localController.getJobStatus();
//     }

//     private find(){
//         return localController.findById();
//     }

//     private order(){
//         return localController.orderBy();
//     }

//     private updateTarget(){
//         return localController.updateTargetOffer();
//     }
// }
// export default localTargetService;