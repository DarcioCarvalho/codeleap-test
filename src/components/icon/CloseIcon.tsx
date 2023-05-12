import { useState } from "react";
import { SVGIconProps } from "../../type/SVGIcon";

export function CloseIcon({
  color = "#fff",
  colorHover = "#fbe887",
  ...rest
}: SVGIconProps) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill={mouseOver ? colorHover : color}
      viewBox="0 0 256 256"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      {...rest}
    >
      <path d="M208.49 191.51a12 12 0 01-17 17L128 145l-63.51 63.49a12 12 0 01-17-17L111 128 47.51 64.49a12 12 0 0117-17L128 111l63.51-63.52a12 12 0 0117 17L145 128z"></path>
    </svg>
  );

}