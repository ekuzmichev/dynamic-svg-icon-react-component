import type { HTMLAttributes } from "react";
import { createElement } from "react";

import React from "react";
import { IconName } from "./IconName";
import { icons } from "./icons";

// Props can vary from project to project, some will require to have some specific variant passed for styling,
// others will extend base css classes with custom prop class etc

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  // These props make styling component easier than creating new classes
  rotate?: number;
}

/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @returns Icon react component
 */
export const Icon = ({ icon, className, rotate, ...rest }: Props) => {
  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      {createElement(icons[icon], {
        style: { width: "100%", height: "100%" },
      })}
    </div>
  );
};
