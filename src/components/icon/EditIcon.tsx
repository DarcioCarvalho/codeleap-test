import { ForwardRefRenderFunction, forwardRef, useState } from "react";
import { SVGIconProps } from "../../type/SVGIcon";
import { useViewport } from "../../hooks/useViewport";


const EditIconBase: ForwardRefRenderFunction<SVGSVGElement, SVGIconProps> = ({
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
      width={screenWidth > 425 ? "32" : "25"}  // "32"
      height={screenWidth > 425 ? "30" : "23"} // "30"
      fill="none"
      viewBox="0 0 32 30"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      {...rest}
    >
      <path
        fill={mouseOver ? colorHover : color}
        d="M9.1 21.266l5.739-.018L27.36 9.321c.492-.472.762-1.1.762-1.767 0-.667-.27-1.295-.762-1.768L25.3 3.805c-.982-.945-2.697-.94-3.672-.004L9.1 15.73v5.537zM23.462 5.573l2.066 1.978L23.45 9.53l-2.062-1.981 2.072-1.976zM11.701 16.77l7.84-7.466 2.062 1.982-7.839 7.464-2.063.006v-1.986z"
      ></path>
      <path
        fill={mouseOver ? colorHover : color}
        d="M6.5 26.25h18.203c1.434 0 2.6-1.121 2.6-2.5V12.915l-2.6 2.5v8.335H10.607c-.034 0-.07.012-.103.012-.043 0-.086-.01-.13-.012H6.5V6.25h8.902l2.6-2.5H6.501c-1.434 0-2.6 1.121-2.6 2.5v17.5c0 1.379 1.166 2.5 2.6 2.5z"
      ></path>
    </svg>
  );
}

export const EditIcon = forwardRef(EditIconBase);

