import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

type Post = {
  author: string;
  content: string;
};

export function Post(props: Post) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/milena-mognon.png" />

          <div className={styles.authorInfo}>
            <strong>Milena Mognon</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time
          title="14 de agosto de 2022 ás 17:32"
          dateTime="2022-08-14 17:32:00"
        >
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu Comentário</strong>

        <textarea placeholder="Deixe o seu comentário"></textarea>
        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
