import { Page } from "@/shared/ui/Page";
import classNames from "classnames";
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	return (
		<Page
			className={classNames(cls.Center, className)}
		>
			<div>
				Page Not Found
			</div>
		</Page>
	);
};
