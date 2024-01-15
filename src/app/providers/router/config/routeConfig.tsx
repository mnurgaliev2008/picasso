import { Navigate, RouteObject } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PostDetailsPage } from "@/pages/PostDetailsPage";
import { PostsPage } from "@/pages/PostsPage";
import App from "@/app/App.tsx";

enum AppRoutes {
	MAIN = 'main',
	POSTS = 'posts',
	POST_DETAILS = 'post_details',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRoutePosts = () => '/posts';
export const getRoutePostDetails = (id: string) => `/posts/${id}`;

const routeConfig: Record<AppRoutes, RouteObject> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <Navigate to={AppRoutes.POSTS} replace/>
	},
	[AppRoutes.POSTS]: {
		path: getRoutePosts(),
		element: <PostsPage />,
	},
	[AppRoutes.POST_DETAILS]: {
		path: getRoutePostDetails(':id'),
		element: <PostDetailsPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />,
	}
}

export const newRouteConfig: RouteObject[] = [
	{
		element: <App />,
		children: Object.values(routeConfig)
	}
]

