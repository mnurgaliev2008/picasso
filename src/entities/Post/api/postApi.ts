import { rtkApi } from "@/shared/api/rtkApi";
import { Post } from "@/entities/Post";

interface getPostsParams {
  page: number;
  limit: number;
}

export const postApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostById: build.query<Post, string>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "GET",
      }),
    }),
    getPosts: build.query<
      { posts: Post[]; totalCount: number },
      getPostsParams
    >({
      query: ({ page, limit }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _page: page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse(posts: Post[], meta) {
        return {
          posts,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
        };
      },
      merge: (currentCache, newItems) => {
        currentCache.posts.push(...newItems.posts);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetPostByIdQuery, useGetPostsQuery } = postApi;
