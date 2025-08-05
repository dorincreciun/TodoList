import type {RouteObject} from "react-router";
import type {Routing_Paths} from "../shared/config/routing.ts";

export type RoutingPaths = (typeof Routing_Paths)[keyof typeof Routing_Paths]

export type MyRouteObject = Omit<RouteObject, "path" | "index"> & {
    path: RoutingPaths,
    index?: false
};