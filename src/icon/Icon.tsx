import { CSSProperties, HTMLAttributes, Suspense, useMemo } from "react";

import React from "react";
import { IconName, icons } from "./icons";

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  color?: CSSProperties["color"];
}

export const Icon = ({ icon, className, color, ...rest }: Props) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${color}`,
      }}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </div>
  );
};
