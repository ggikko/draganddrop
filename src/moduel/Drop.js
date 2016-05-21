class Drop {

    constructor(object, isInside) {
        this.dropObject(object, isInside);
    }

    dropObject(object, isInside) {

        if (!isInside) {
            object.remove();
            this._isDragging = false;
        } else {
            alert("성공");
        }
    }

}

export default Droppable;