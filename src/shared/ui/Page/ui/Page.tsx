import { ReactNode } from "react";
import classNames from "classnames";
import cls from './Page.module.scss';

interface PageProps {
	className?: string;
	children: ReactNode;
}

export const Page = (props: PageProps) => {
	const { className, children } = props;

	return (
		<main className={classNames(className, cls.Page)}>
			{children}
		</main>
	);
};
