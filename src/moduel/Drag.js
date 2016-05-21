class Drag {

    /** 객체를 받아서 drag하는 모듈 */
    constructor(object) {
        $(document).on('mousemove', $.proxy(this.moveObject(object), this))
    }

    moveObject(object) {

        object.css({
            top: e.pageY - (this.newObject.height() / 2),
            left: e.pageX - (this.newObject.width() / 2)
        })

    }
}

export default Droppable;