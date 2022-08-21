import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

type Comment = {
  content: string;
  onDeleteComment: (comment: string) => void;
};
export function Comment({ content, onDeleteComment }: Comment) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // quando um estado precisa dele mesmo para atualizar o valor é melhor usar essa sintaxe de função
    setLikeCount((state) => {
      // state é p valor mais atualizado de likeCount
      return state + 1;
    });
  }

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

            <button onClick={handleDeleteComment} type="button" title="Deletar">
              Deletar
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
