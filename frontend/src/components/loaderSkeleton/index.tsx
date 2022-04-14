import { FC } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoaderSkeleton: FC<SkeletonProps> = ({count},className, ...rest) => {
  return <Skeleton count={count} {...rest} baseColor="#9d449f" highlightColor="#292A2E" />;
};
export default LoaderSkeleton;
