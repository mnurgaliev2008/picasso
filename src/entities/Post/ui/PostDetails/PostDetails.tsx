import { useGetPostByIdQuery } from "@/entities/Post";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import cls from "./PostDetails.module.scss";
import classNames from "classnames";
import { Text } from "@/shared/ui/Text";
import { getRoutePosts } from "@/app/providers/router";

interface PostDetailsProps {
  id: string;
  className?: string;
}

export const PostDetails = ({ id, className }: PostDetailsProps) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPostByIdQuery(id);
  if (error && 'status' in error) {
    if (error.status === 404) return (
        <div className={cls.Center}>Post not found</div>
    )
    else return (
      <div className={cls.Center}>
        <div>Error when loading post</div>
        <div>Request status: {error.status}</div>
      </div>
    );
  }

  if (isLoading || !data) {
    return <div className={cls.Center}>Loading post...</div>;
  }

  return (
    <div className={classNames(className, cls.PostDetails)}>
      <Text
        className={cls.Title}
        text={data.title}
        size={"xl"}
        align={"center"}
        bold
      />
      <Text
        className={cls.Number}
        text={`Пост №${data.id}`}
        size={"l"}
        align={"center"}
      />
      <Text className={cls.Body} text={data.body} />
      <Button onClick={() => navigate(getRoutePosts())}>
        Назад
      </Button>
    </div>
  );
};
