import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		disabled,
		...otherProps
	} = props;
	return (
		<button
			type="button"
			className={classNames(className, cls.Button)}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
}