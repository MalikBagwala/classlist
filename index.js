function classList(...classes) {
  // Array of strings
  const classsesSet = classes?.reduce(
    (prevClasses, arg) => {
      if (!arg) return prevClasses;

      if (typeof arg === "string") return prevClasses.add(arg);

      if (arg.constructor === Object) {
        Object.keys(arg).forEach((param) => {
          // Only add to the set if the value is a truthy (removes null,undefined,0,false,NaN,"")
          if (arg[param]) prevClasses.add(param);
        });
        return prevClasses;
      }
      return prevClasses;
    },
    // We use a set to only accumulate unique classes
    new Set()
  );
  // return undefined if the set has no elements
  return classsesSet.size ? [...classsesSet].join(" ") : undefined;
}

module.exports = classList;
