export function $(selector) {
  const self = {
    element: document.querySelector(selector),
    value: document.querySelector(selector).value,
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
      self.element.insertAdjacentHTML('beforeend', child);
    },
    changeChild: (child) => {
      self.element.innerHTML = child;
    },
    removeChilds: () => {
      self.element.innerHTML = "";
    },
    bind: (val) => {
      let _val = val;
      const setVal = (val) => {
        _val = val;
        if (Array.isArray(val)) {
          self.element.innerHTML = '';
          val.forEach(element => {
            self.element.innerHTML += element;
          });
        }
        else {
          self.element.innerHTML = val;
        }
      }
      const getVal = () => _val;

      setVal(val);

      return [getVal, setVal];
    }
  }

  return self;
}

export function useState (val) {
  let _val = val;
  const setVal = (val) => {
    _val = val;
  }
  const getVal = () => _val;

  setVal(val);

  return [getVal, setVal];
}