import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
  withBorder?: boolean;
}

export function Avatar({ withBorder, ...props }: Avatar) {
  return (
    <img
      className={withBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
