import { Subject } from "rxjs";

export interface EventBusType {
  type?: string,
  payload?: any;
}

export enum EventBusName {
  TEST = "TEST",
}

export default class EventBus {
  private static instance: EventBus;
  private eventSubject = new Subject<EventBusType>();

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  get events() {
    return this.eventSubject.asObservable();
  }

  post(event: EventBusType) {
    this.eventSubject.next(event);
  }
}
