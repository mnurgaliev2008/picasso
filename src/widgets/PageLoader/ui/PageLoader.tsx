import classNames from "classnames";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(className, cls.PageLoader)}>Loading page...</div>
  );
};
