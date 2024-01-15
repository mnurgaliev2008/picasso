import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { rtkApi } from "@/shared/api/rtkApi.ts";
import { newRouteConfig } from "@/app/providers/router";
import '@/app/styles/index.scss'

const container = document.getElementById('root');

if (!container) {
	throw new Error(
		'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение'
	)
}

const root = createRoot(container);
const router = createBrowserRouter(newRouteConfig )

root.render(
		<ApiProvider api={rtkApi}>
			<ErrorBoundary>
				<RouterProvider router={router}/>
			</ErrorBoundary>
		</ApiProvider>,
)
