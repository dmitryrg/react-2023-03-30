class Store {
  state;
  rootReducer;

  subscribers = new Set();

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  subscribe(selectiveRender) {
    this.subscribers.add(selectiveRender);
  }

  unsubscribe(selectiveRender) {
    this.subscribers.delete(selectiveRender);
  }

  // action = {type: string, payload: any}
  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    this.subscribers.forEach(selectiveRender => {
      selectiveRender(this.state);
    });
  }

  getState() {
    return this.state;
  }
}

export const createStore = (function () {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
