import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSearch = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.3-4.3" />
  </svg>
)
export default SvgFeatherSearch
