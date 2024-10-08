import React from "react";
import { IconName, Icon  } from "../ui/icon";
import * as TooltipBase from "../ui/tooltip";
import { CopyToClipboard  } from "../ui/copy-to-clipboard"
import { clsx as cn } from "clsx"

interface TooltipRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  className?: string;
}

const TooltipRoot = React.forwardRef<HTMLElement, TooltipRootProps>(
  function TooltipRoot(
    { children, className, ...otherProps }: TooltipRootProps,
    ref
  ) {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-900 bg-neutral-800 pt-1 pr-2 pb-1 pl-2 shadow-overlay",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children ? (
          <span className="text-caption font-caption text-white">
            {children}
          </span>
        ) : null}
      </div>
    );
  }
);

export const Tooltip = TooltipRoot;

interface CopyToClipboardButtonRootProps
  extends React.ComponentProps<typeof CopyToClipboard.Root> {
  clipboardText?: string;
  tooltipText?: string;
  icon?: IconName;
  onCopy?: () => void;
  className?: string;
}

const CopyToClipboardButtonRoot = React.forwardRef<
  HTMLElement,
  CopyToClipboardButtonRootProps
>(function CopyToClipboardButtonRoot(
  {
    clipboardText,
    tooltipText,
    icon = "FeatherClipboard",
    className,
    ...otherProps
  }: CopyToClipboardButtonRootProps,
  ref
) {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild={true}>
          <CopyToClipboard.Root
            clipboardText={clipboardText}
            {...otherProps}
          >
            <div
              className={cn(
                "group/e8c76626 flex h-6 w-6 cursor-pointer flex-col items-center justify-center gap-2 rounded-md hover:bg-neutral-100",
                className
              )}
              ref={ref as any}
            >
              <Icon
                className="text-body font-body text-subtext-color group-hover/e8c76626:text-default-font"
                name={icon}
              />
            </div>
          </CopyToClipboard.Root>
        </TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipBase.Content
            side="bottom"
            align="center"
            sideOffset={8}
            asChild={true}
          >
            <Tooltip>{tooltipText}</Tooltip>
          </TooltipBase.Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
});

export const CopyToClipboardButton = CopyToClipboardButtonRoot;
