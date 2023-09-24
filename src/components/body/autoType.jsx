import React from "react";
import Typed from "typed.js";

function MyComponent(props) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: [props.name],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <span
      style={{
        color: "#07C51A",
      }}
      ref={el}
    />
  );
}

export default MyComponent;
