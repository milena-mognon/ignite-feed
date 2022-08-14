type Post = {
  author: string;
  content: string;
};
export function Post(props: Post) {
  return <p>{props.content}</p>;
}
