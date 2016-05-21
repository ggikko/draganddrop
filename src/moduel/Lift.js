class Lift {

    constructor(object) {
        this.liftObject(object);
    }

    liftObject(object){
        this.newObject = object.clone();
        $(document.body).append(this.newObject);
    }
}

export default Droppable;