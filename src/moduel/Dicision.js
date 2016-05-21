class Dicision {

    /** 사각형 안에 포함되는지 안되는지 + 사각형 색상 변경 모듈 */
    constructor(rec, object) {

        this.recTop = rec.offset().top;
        this.recLeft = rec.offset().left;
        this.recRight = rec.width() + this.recLeft;
        this.recBottom = rec.height() + this.recTop;

        this.setRecColor(object);
    }

    setRecColor(object) {

        if (object) {
            var x = object.offset().left + newObject.width() / 2;
            var y = object.offset().top + newObject.height() / 2;

            if (x < this.recRight && x > this.recLeft && y < this.recBottom && y > this.recTop) {
                $(document.body).find(".rec.rec1").css({
                    background: "#3b3b3b"
                })
            }
        }
    }
}

export default Droppable;