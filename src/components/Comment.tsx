import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/milena-mognon.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Milena Mognon</strong>
              <time
                title="14 de agosto de 2022 ás 17:32"
                dateTime="2022-08-14 17:32:00"
              >
                Publicado a 1h
              </time>
            </div>

            <button type="button" title="Deletar">
              Deletar
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
