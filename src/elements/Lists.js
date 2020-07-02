import React from "react";
import propTypes from "prop-types";

export default function Lists(props) {
    const className = [""];
    className.push("list-reset")
    if(props.isSmall)
    className.push("text-xs")
  return (
    <ul class="pricing-item-features-list mb-32">
      <li class="is-checked">Excepteur sint occaecat velit</li>
      <li class="is-checked">Excepteur sint occaecat velit</li>
      <li class="is-checked">Excepteur sint occaecat velit</li>
      <li>Excepteur sint occaecat velit</li>
      <li>Excepteur sint occaecat velit</li>
    </ul>
  );
}

Lists.propTypes = {
    data: propTypes.array,
    className: propTypes.string,
    isSmall: propTypes.bool,
};
