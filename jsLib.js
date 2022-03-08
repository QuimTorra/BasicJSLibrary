export function $(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      self.element.addEventListener(event, callback);
    },
    hide: () => {
      self.element.style.display = "none";
    },
    show: () => {
      self.element.style.display = "block";
    },
    attr: (name, val) => {
      if (val == null)
        self.element.getAttribute(name);
      else
        self.element.setAttribute(name, val);
    },
    addClass: (_class) => {
      self.element.classList.add(_class);
    },
    removeClass: (_class) => {
      self.element.classList.remove(_class);
    },
    addChild: (child) => {
      self.element.innerHTML += child;
    },
    changeChild: (child) => {
      self.element.innerHTML = child;
    },
    removeChilds: () => {
      self.element.innerHTML = "";
    }
  }

  return self;
}
