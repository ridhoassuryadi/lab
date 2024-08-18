import React from "react";
import { IconName, Icon  } from "../ui/icon";
import * as Tooltip from "../ui/tooltip";
import { CopyToClipboard  } from "../ui/copy-to-clipboard"
import { clsx as cn } from "clsx"

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
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild={true}>
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
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            align="center"
            sideOffset={8}
            asChild={true}
          >
            <Tooltip.Tooltip>{tooltipText}</Tooltip.Tooltip>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
});

export const CopyToClipboardButton = CopyToClipboardButtonRoot;
