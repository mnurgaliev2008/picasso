import { Page } from "@/shared/ui/Page";
import { useParams } from "react-router-dom";
import { PostDetails } from "@/entities/Post";

interface PostDetailsPageProps {
  className?: string;
}

const PostDetailsPage = ({ className }: PostDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page className={className}>
      <PostDetails id={id} />
    </Page>
  );
};

export default PostDetailsPage;
