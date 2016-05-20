class Draggable {

    /**
     * @param htConfig
     */
    constructor(htConfig) {
        this.htConfig = htConfig;

        this._isActivated = false;

        this.cachedElement();
        this.setEvent();
    }

    cachedElement() {
        this.el = $(this.htConfig.className);
    }

    setEvent() {
        this.el.on('mousedown', $.proxy(this.onSelect, this));
        $(document).on('mousemove', $.proxy(this.onDrag, this))
        $(document).on('mouseup', $.proxy(this.onStopDrag, this));
    }

    onSelect(e) {
        this._isActivated = true;

        this.oDragger = $(e.currentTarget).clone();
        $(document.body).append(this.oDragger);
    }

    onDrag(e) {
        if (this.oDragger && this._isActivated) {
            this.oDragger.css({
                top: e.pageY - (this.oDragger.height() / 2),
                left: e.pageX - (this.oDragger.width() / 2)
            })
        }
    }

    onStopDrag(e) {
        this._isActivated = false;

        this.oDragger.remove();
    }
}

export default Draggable;