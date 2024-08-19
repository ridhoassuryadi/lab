import React from "react";
import { clsx as cn } from "clsx"

interface BlogPostLinkRootProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  authorAvatar?: string;
  author?: string;
  publishedAt?: string;
  className?: string;
}

const BlogPostLinkRoot = React.forwardRef<HTMLElement, BlogPostLinkRootProps>(
  function BlogPostLinkRoot(
    {
      title,
      authorAvatar,
      author,
      publishedAt,
      className,
      ...otherProps
    }: BlogPostLinkRootProps,
    ref
  ) {
    return (
      <div
        className={cn(
          "group/67803893 flex w-full cursor-pointer flex-col items-start gap-1 rounded-md border border-solid border-transparent pt-3 pr-4 pb-3 pl-4 hover:rounded-md hover:border hover:border-solid hover:border-neutral-border hover:bg-default-background",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {title ? (
          <span className="w-full text-[18px] font-[500] leading-[28px] text-default-font">
            {title}
          </span>
        ) : null}
        <div className="flex w-full items-center gap-1.5">
          <div className="flex items-center gap-1">
            {author ? (
              <span className="text-body font-body text-default-font">
                {author}
              </span>
            ) : null}
          </div>
          <span className="text-body font-body text-subtext-color">•</span>
          {publishedAt ? (
            <span className="text-body font-body text-subtext-color">
              {publishedAt}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const BlogPostLink = BlogPostLinkRoot;
