import type {AnchorHTMLAttributes} from "react";
import type {NavigateVariant} from "../ui/style.ts";
import type {RoutingPaths} from "../../../../types/routing.ts";

export type NavigateProps = AnchorHTMLAttributes<HTMLAnchorElement> & NavigateVariant & {
    href: RoutingPaths
};