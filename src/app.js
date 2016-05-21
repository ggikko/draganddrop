import Draggable from './lib/Draggable.js';
import Droppable from './lib/Droppable.js';

class App {

    constructor() {
        this.setComponent();

    }

    setComponent(){

        // this.oDraggable = new Droppable({
        //     className: '.rec1'
        // });

        this.oDraggable = new Draggable({
            className: '.rec2'
        });

        // this.dragComponent = new Draggable({
        //     object : $('.rec.rec2')
        // });
    }

}

export default new App();