const obj = {
  name: "Yogesh",
  age: 34,
};

const objProxy = new Proxy(obj, {
  get(target, props) {
    if (props in target) {
      return target[props];
    }
    return false;
  },
  set(target, props, value) {
    if (!(props in target)) return false;
    if (props == "name" && typeof value !== "string") {
      throw new TypeError(`name must be a string`);
    }
    if (props == "age" && typeof value !== "number") {
      throw new TypeError(`age must be a number`);
    }
    target[props] = value;
  },
});

objProxy.name = "bro";
console.log(objProxy.name);
