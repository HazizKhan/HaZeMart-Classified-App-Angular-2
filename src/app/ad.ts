export class Ad{
    model: string;
    company: string;
    price: number;
    color: string;
    image: string;
    details: string;
    id: number;
    inCart = false;
    constructor(model:string,company:string,price:number,color:string,image:string, details: string, id:number){
        this.model = model;
        this.color = color;
        this.company = company;
        this.price = price;
        this.image = image;
        this.details = details;
        this.id = id;
    }
}
export class Mobile extends Ad{
    processor: string;
    screen: string;
    memory: string;
    os: string;
    type: string;
    constructor(model:string,company:string,price:number,color:string,processor:string,screen:string, memory: string, os:string, image:string, details:string, id){
        super(model,company,price,color,image, details, id);
        this.processor = processor;
        this.memory = memory;
        this.screen = screen;
        this.image = image;
        this.os = os;
        this.type = "mobile";
    }
}
export class Car extends Ad{
    engine: string;
    epaClass: string;
    styleName: string;
    driveTrain: string;
    passengerCapacity: number;
    passengerDoors: number;
    bodyStyle: string;
    type: string;
    constructor(model:string,company:string,price:number,color:string,engine:string,epaClass:string,
                styleName:string,driveTrain:string,passengerCapacity:number, passengerDoors:number, bodyStyle:string,image:string, details:string, id){
        super(model,company,price,color, image, details, id);
        this.epaClass = epaClass;
        this.styleName = styleName;
        this.driveTrain = driveTrain;
        this.engine = engine;
        this.image = image;
        this.passengerCapacity = passengerCapacity;
        this.passengerDoors = passengerDoors;
        this.bodyStyle = bodyStyle;
        this.color = color;
        this.type = "car";
    }

}
