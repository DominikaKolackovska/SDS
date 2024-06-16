import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconSidebar = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M6.8 2C6.8 1.55817 6.44183 1.2 6 1.2C5.55817 1.2 5.2 1.55817 5.2 2H6.8ZM5.2 14C5.2 14.4418 5.55817 14.8 6 14.8C6.44183 14.8 6.8 14.4418 6.8 14H5.2ZM3.33333 2.8H12.6667V1.2H3.33333V2.8ZM12.6667 2.8C12.9612 2.8 13.2 3.03878 13.2 3.33333H14.8C14.8 2.15513 13.8449 1.2 12.6667 1.2V2.8ZM13.2 3.33333V12.6667H14.8V3.33333H13.2ZM13.2 12.6667C13.2 12.9612 12.9612 13.2 12.6667 13.2V14.8C13.8449 14.8 14.8 13.8449 14.8 12.6667H13.2ZM12.6667 13.2H3.33333V14.8H12.6667V13.2ZM3.33333 13.2C3.03878 13.2 2.8 12.9612 2.8 12.6667H1.2C1.2 13.8449 2.15513 14.8 3.33333 14.8V13.2ZM2.8 12.6667V3.33333H1.2V12.6667H2.8ZM2.8 3.33333C2.8 3.03878 3.03878 2.8 3.33333 2.8V1.2C2.15513 1.2 1.2 2.15513 1.2 3.33333H2.8ZM5.2 2V14H6.8V2H5.2Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconSidebar,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13613",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSidebar size={size} />,
  },
);
