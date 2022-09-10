/** @format */

function State(state = {}) {
  this.state = state;

  this.setState = function (data) {
    this.state = data;
  };

  this.replaceState = function (data) {
    this.state = data;
  };

  this.setPath = (path, value, replace) => {
    if (path !== null) {
      return path.split(".").reduce((o, p, i) => {
        return (o[p] =
          path.split(".").length === ++i
            ? replace
              ? value
              : typeof value === "string" ||
                typeof value === "boolean" ||
                typeof value === "number" ||
                !isNaN(Number(p))
              ? value
              : typeof this.getPropertyPath(this.state, path) !== "undefined"
              ? { ...this.resolvePath(path), ...value }
              : { ...value }
            : o[p] || {});
      }, this.state);
    } else {
      this.state = { ...this.state, ...value };
    }
  };

  this.set = function (key, vlaue) {
    this.setPath(key, vlaue, false);
  };
  this.put = function (vlaue) {
    this.setPath(null, vlaue, true);
  };
  this.getPropertyPath = function (obj, path) {
    if (!obj || !path) {
      return;
    }

    if (typeof path === "string") {
      path = path.split(".");
    }

    for (var i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]];

      if (typeof obj === "undefined") {
        return;
      }
    }

    return obj[path.pop()];
  };

  this.deletePropertyPath = function (obj, path) {
    if (!obj || !path) {
      return;
    }

    if (typeof path === "string") {
      path = path.split(".");
    }

    for (var i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]];

      if (typeof obj === "undefined") {
        return;
      }
    }

    delete obj[path.pop()];
  };
  this.delete = function (key) {
    if (key) {
      this.deletePropertyPath(this.state, key);
    } else {
      this.state = {};
    }
  };

  this.have = function (key) {
    if (!this.empty(this.state) && key in this.state) {
      return true;
    } else {
      return false;
    }
  };

  this.empty = function () {
    return (
      this.state == null ||
      this.state === "" ||
      (Object.keys(this.state).length === 0 &&
        this.state.constructor === Object)
    );
  };

  this.stringify = function () {
    return JSON.stringify(this.state);
  };

  this.parse = function () {
    return JSON.parse(this.state);
  };

  this.resolvePath = (path, key = false) => {
    if (path !== null) {
      return (
        path?.split(".")?.reduce?.((o, p) => {
          if (o) {
            return !key ? o[p] : p;
          } else {
            return this.state;
          }
        }, this.state) ?? this.state
      );
    } else {
      return null;
    }
  };

  this.get = function (key) {
    return this.resolvePath(key);
  };

  Object.defineProperty(this, "data", {
    get() {
      return this.state;
    },
  });

  Object.defineProperty(this, "length", {
    get() {
      return Object.keys(this.state).length;
    },
  });

  Object.defineProperty(this, "keys", {
    get() {
      return Object.keys(this.state);
    },
  });

  Object.defineProperty(this, "values", {
    get() {
      return Object.values(this.state);
    },
  });

  Object.defineProperty(this, "entries", {
    get() {
      return Object.entries(this.state);
    },
  });

  Object.defineProperty(this, "isEmpty", {
    get() {
      return this.empty();
    },
  });

  this.clear = function () {
    this.state = {};
  };
  this.destroy = function () {
    this.state = null;
  };
}

module.exports = State;
