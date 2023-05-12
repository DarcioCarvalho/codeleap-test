import { SVGProps } from "react";

export type SVGIcon = JSX.IntrinsicElements["svg"];

export interface SVGIconProps
  extends Partial<
    Omit<SVGProps<SVGSVGElement>, "width" | "height" | "fill" | "viewBox">
  > {
  color?: string;
  colorHover?: string;
}