import { SVGIconProps } from "../../type/SVGIcon";

export function WarningIcon({ ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="#f1c52f"
      viewBox="0 0 256 256"
      {...rest}
    >
      <path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 00-42.7 0L19.2 188.09a23.51 23.51 0 000 23.72A24.35 24.35 0 0040.55 224h174.9a24.35 24.35 0 0021.33-12.19 23.51 23.51 0 00.02-23.72zM120 104a8 8 0 0116 0v40a8 8 0 01-16 0zm8 88a12 12 0 1112-12 12 12 0 01-12 12z"></path>
    </svg>
  );
}