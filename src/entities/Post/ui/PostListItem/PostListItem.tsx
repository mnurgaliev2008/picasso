import { Post } from "@/entities/Post";
import cls from "./PostListItem.module.scss";
import { Button } from "@/shared/ui/Button";
import { NavigateFunction } from "react-router-dom";
import { getRoutePostDetails } from "@/app/providers/router";
import { Text } from "@/shared/ui/Text";
import classNames from "classnames";

export interface PostListItemProps {
  className?: string;
  post: Post;
  navigate: NavigateFunction;
}

export const PostListItem = (props: PostListItemProps) => {
  const { post, className, navigate } = props;

  const onPostItemClick = (id: string) => {
    navigate(getRoutePostDetails(id));
  };

  return (
    <div className={classNames(className, cls.Post)} key={post.id}>
      <Text
        className={cls.PostTitle}
        text={`${post.id}. ${post.title}`}
        size={"l"}
      />
      <Text className={cls.PostBody} text={post.body}></Text>
      <Button onClick={() => onPostItemClick(post.id)}>Просмотр</Button>
    </div>
  );
};
