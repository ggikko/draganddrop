class Droppable {

    constructor(htConfig) {
        this.htConfig = htConfig;

        this.cachedElement();
        this.setEvent();
    }

    cachedElement() {
        this.el = $(this.htConfig.className);
    }

    setEvent() {
        this.el.on('mousedown', $.proxy(this.onSelect, this));
        $(document).on('mousemove', $.proxy(this.isDroppable, this));
        $(document).on('mouseup', $.proxy(this.onStopDrag, this));
    }

    isDroppable(){

        this.el.css({
            background:'yellow'
        })
    }
}

export default Droppable;