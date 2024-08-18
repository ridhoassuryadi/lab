import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
    <path d="M17 20V8" />
    <path d="M22 4v16" />
  </svg>
)
export default SvgFeatherSignal
