export class EventBus {
    constructor() {
        this.eventHandlerHash = {
            'click': [],
        }
    }

    on(evtName, handler) {
        if (this.eventHandlerHash[evtName] && handler) {
            this.eventHandlerHash[evtName].push(handler);
        }
    }
    
    trigger(evtName, evtData) {
        this.eventHandlerHash[evtName]
            .forEach(h => {
                h(evtData);
            })
    }
}