import { Button } from "@/shared/ui/Button";

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
	const reloadPage= () => {
		location.reload();
	}

	return (
		<div className={className}>
			<p>Произошла неизвестная ошибка</p>
			<Button onClick={reloadPage}>Обновить страницу</Button>
		</div>
	)
}