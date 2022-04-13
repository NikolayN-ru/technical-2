import { FC } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoaderSkeleton: FC<SkeletonProps> = (className, ...rest) => {
  return <Skeleton {...rest} baseColor="#9d449f" highlightColor="#292A2E" />;
};
export default LoaderSkeleton;
