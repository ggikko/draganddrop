class Draggable {

    /**
     * @param htConfig
     */
    constructor(htConfig) {

        this.htConfig = htConfig;

        this._isDragging = false;

        this.rec1Top = $(document.body).find(".rec.rec1").offset().top;
        this.rec1Left = $(document.body).find(".rec.rec1").offset().left;
        this.rec1Right = $(document.body).find(".rec.rec1").width() + this.rec1Left;
        this.rec1Bottom = $(document.body).find(".rec.rec1").height() + this.rec1Top;

        this.cachedElement();
        this.setEvent();
    }

    cachedElement() {
        this.el = $(this.htConfig.className);
    }

    setEvent() {
        // this.el.on('mousedown', $.proxy(this.onDrop, this));

        $(document).on('mouseup', $.proxy(this.onDrop, this));

        // $(document).on('mousemove', $.proxy(this.onDrag, this))
        $(document).on('mousemove', $.proxy(this.onDrag, this))

        this.el.on('mousedown', $.proxy(this.onLift, this));

        // this.el.on('mouseup', $.proxy(this.onDrop, this));
    }

    onSelect(e) {

    }

    /** 놓는다 */
    onDrop(e) {
        console.log("down");

        // 영역 내의 사각형 가로 세로
        // var rec1Top = $(document.body).find(".rec.rec1").offset().top;
        // var rec1Left = $(document.body).find(".rec.rec1").offset().left;
        // var rec1Right = $(document.body).find(".rec.rec1").width() + this.rec1Left;
        // var rec1Bottom = $(document.body).find(".rec.rec1").height() + this.rec1Top;

        // offset.left + width/2 -> x 중점
        // offset.top + height/2 -> y 중점

        //만약 중점의 위치가 직사각형 내부에 있으면 색깔을 원래대로 바꿔놓고 alert창 성공 띄어줌
        if (this.newObject) {
            // var newObject = $(document.body).find(".rec.rec2").last();
            var newObject = this.newObject;

            var x = newObject.offset().left + newObject.width() / 2;
            var y = newObject.offset().top + newObject.height() / 2;

            console.log(x);
            console.log(y);

            if (x < this.rec1Right && x > this.rec1Left && y < this.rec1Bottom && y > this.rec1Top) {
                // $(document.body).find(".rec.rec1").css({
                //     background : "#3b3b3b"
                // })
                alert("성공");
            }
        }


        if (this.newObject && this._isDragging) {
            console.log("remove");
            $(document.body).find(".rec.rec2").last().remove();
            this._isDragging = false;
        }
    }

    /** 들어올린다 */
    onLift(e) {
        console.log("up");
        this._isDragging = true;
        this.newObject = $(e.currentTarget).clone();
        $(document.body).append(this.newObject);
    }

    /** 마우스 올린 상태에서 dragging 중 */
    onDrag() {


        //만약 중점의 위치가 직사각형 내부에 있으면 직사각형 색깔을 바꾼다

        if (this.newObject) {
            // var newObject = $(document.body).find(".rec.rec2").last();
            var newObject = this.newObject;

            var x = newObject.offset().left + newObject.width() / 2;
            var y = newObject.offset().top + newObject.height() / 2;

            console.log(x);
            console.log(y);


            if (x < this.rec1Right && x > this.rec1Left && y < this.rec1Bottom && y > this.rec1Top) {
                $(document.body).find(".rec.rec1").css({
                    background : "#333333"
                })
                console.log("in");
            }
        }

        if (this.newObject && this._isDragging) {
            console.log("drag");
            this.newObject.css({
                top: arguments[0].pageY - (this.newObject.height() / 2),
                left: arguments[0].pageX - (this.newObject.width() / 2)
            })
        }
    }


    // onStopDrag(e) {
    //     this._isActivated = false;

    // this.newObject.remove();
    // }
}

export default Draggable;