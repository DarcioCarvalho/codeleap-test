import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import { SVGIconProps } from "../../type/SVGIcon";
import { useViewport } from "../../hooks/useViewport";

const RemoveIconBase: ForwardRefRenderFunction<SVGSVGElement, SVGIconProps> = ({
  color = "#fff",
  colorHover = "#fbe887",
  ...rest
}, ref) => {
  const [mouseOver, setMouseOver] = useState(false);
  const { width: screenWidth } = useViewport();

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={screenWidth > 425 ? "32" : "25"} // "32"
      height={screenWidth > 425 ? "30" : "23"} // "30"
      fill="none"
      viewBox="0 0 32 30"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      {...rest}
    >
      <path
        fill={mouseOver ? colorHover : color}
        d="M7.8 23.75c0 1.375 1.171 2.5 2.601 2.5h10.401c1.43 0 2.6-1.125 2.6-2.5v-15H7.801v15zm3.2-8.9l1.832-1.762 2.77 2.65 2.756-2.65 1.833 1.762-2.756 2.65 2.756 2.65-1.833 1.763-2.756-2.65-2.757 2.65-1.833-1.763 2.756-2.65L11 14.85zM20.151 5l-1.3-1.25h-6.5L11.051 5H6.5v2.5h18.202V5h-4.55z"
      ></path>
    </svg>
  );
}

export const RemoveIcon = forwardRef(RemoveIconBase);

