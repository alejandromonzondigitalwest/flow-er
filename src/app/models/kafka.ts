export class Kafka {

    constructor(_id = '', kafka = '') {
         this._id = _id;
         this.kafka = kafka;
     }
 
     _id: string;
     kafka: string;
     }