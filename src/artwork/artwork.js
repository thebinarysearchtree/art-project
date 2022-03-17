const makeArt = (elementClass, name) => {
  customElements.define(name, elementClass);
  return (state) => {
    const element = document.createElement(name);
    element.state = state;
    element.renderShadow(state);
    return element;
  }
}

const makeAsyncArt = (elementClass, name) => {
  customElements.define(name, elementClass);
  return async (state) => {
    const element = document.createElement(name);
    element.state = state;
    await element.renderShadow(state);
    return element;
  }
}

export {
  makeAsyncArt,
  makeArt
};
