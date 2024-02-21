// core/events.ts

interface Listener {
    fn: Function;
    context?: any;
    once?: boolean;
}

interface EventData {
    type: string;
    target: EventEmitter;
    [key: string]: any; // Other optional properties
}

export class EventEmitter {
    private _events: { [key: string]: Listener[] } = {};

    on(type: string, fn: Function, context?: any): this {
        if (!this._events[type]) {
            this._events[type] = [];
        }
        this._events[type].push({ fn, context });
        return this;
    }

    off(type: string, fn?: Function, context?: any): this {
        if (!this._events[type]) {
            return this;
        }

        if (!fn && !context) {
            delete this._events[type];
            return this;
        }

        const listeners = this._events[type];
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            if ((!fn || listener.fn === fn) && (!context || listener.context === context)) {
                listeners.splice(i, 1);
                i--;
            }
        }
        return this;
    }

    once(type: string, fn: Function, context?: any): this {
        const onceWrapper = (...args: any[]) => {
            fn.apply(this, args);
            this.off(type, onceWrapper);
        };
        return this.on(type, onceWrapper, context);
    }

    emit(type: string, data?: any): this {
        if (!this._events[type]) {
            return this;
        }
        const eventData: EventData = { type, target: this, ...data };
        const listeners = this._events[type].slice(); // Copy listeners to prevent modification during iteration
        listeners.forEach(listener => {
            listener.fn.call(listener.context || this, eventData);
            if (listener.once) {
                this.off(type, listener.fn, listener.context);
            }
        });
        return this;
    }

    listeners(type: string): Listener[] {
        return this._events[type] || [];
    }

    hasListeners(type: string): boolean {
        return !!this._events[type]?.length;
    }
}
