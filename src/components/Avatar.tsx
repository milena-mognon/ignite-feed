import styles from "./Avatar.module.css";

type Avatar = {
  withBorder?: boolean;
  src: string;
};

export function Avatar(props: Avatar) {
  return (
    <img
      className={props.withBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
