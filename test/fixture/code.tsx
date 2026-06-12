import { useState } from "react";

const a = 1;
// @ts-expect-error
a = 2;

const p = new Promise(() => {});

export function Component({ cond }: { cond: boolean }) {
  if (cond) {
    const [state] = useState(0);
    return <div>{state}</div>;
  }
  return <Child style={{ color: "red" }} />;
}

export function Parent() {
  function Inner() {
    return <span />;
  }
  return <Inner />;
}

function Child(props: { style: object }) {
  return <div {...props} />;
}

export { a, p };
