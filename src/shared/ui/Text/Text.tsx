import { memo } from "react";
import cls from './Text.module.scss';
import classNames from "classnames";

export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 's' | 'm' | 'l' | 'xl';

interface TextProps {
	className?: string;
	text: string;
	align?: TextAlign;
	size?: TextSize;
	bold?: boolean;
}

const mapSizeToClass: Record<TextSize, string> = {
	s: cls.size_s,
	m: cls.size_m,
	l: cls.size_l,
	xl: cls.size_xl,
};

export const Text = memo((props: TextProps) => {
	const {
		className,
		text,
		size = 'm',
		align = 'left',
		bold,
	} = props;

	return (
		<p
			className={classNames(
				className,
				cls[align],
				mapSizeToClass[size],
				{ [cls.bold]: bold },
			)}
		>
			{text}
		</p>
	)
})