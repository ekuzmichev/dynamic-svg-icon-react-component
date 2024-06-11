import { CSSProperties, FC, HTMLAttributes, Suspense, useMemo } from "react";

import React from "react";
import { IconName, icons } from "./icons";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
  className?: string;
  color?: CSSProperties["color"];
}

export const Icon: FC<IconProps> = ({
  name,
  className,
  color,
  ...restProps
}: IconProps) => {
  const SvgIcon = useMemo(() => icons[name], [name]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={name}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${color}`,
      }}
      {...restProps}
    >
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </div>
  );
};
