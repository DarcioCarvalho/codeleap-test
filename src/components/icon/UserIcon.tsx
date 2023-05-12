import { useViewport } from "../../hooks/useViewport";
import { SVGIconProps } from "../../type/SVGIcon";

export function UserIcon({
  color = "#fff",
  colorHover = "#fbe887",
  ...rest
}: SVGIconProps) {

  const { width: screenWidth } = useViewport();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={screenWidth > 425 ? "28" : "24"}
      height={screenWidth > 425 ? "28" : "24"}
      fill={color}
      viewBox="0 0 256 256"
      {...rest}
    >
      <path d="M172 120a44 44 0 11-44-44 44.05 44.05 0 0144 44zm60 8A104 104 0 11128 24a104.11 104.11 0 01104 104zm-16 0a88.09 88.09 0 00-91.47-87.93C77.43 41.89 39.87 81.12 40 128.25a87.65 87.65 0 0022.24 58.16A79.71 79.71 0 0184 165.1a4 4 0 014.83.32 59.83 59.83 0 0078.28 0 4 4 0 014.83-.32 79.71 79.71 0 0121.79 21.31A87.62 87.62 0 00216 128z"></path>
    </svg>
  );


}