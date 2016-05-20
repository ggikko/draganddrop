import Draggable from './lib/Draggable.js';
import Droppable from './lib/Droppable.js';

class App {

    constructor() {
        this.setComponent();

        debugger;

    }

    setComponent(){
        this.oDroppable = new Droppable({
            className: '.droppable'
        });

        this.oDraggable = new Draggable({
            className: '.draggable'
        });
    }
}

export default new App();