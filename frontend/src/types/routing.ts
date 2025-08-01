import type {RouteObject} from "react-router";
import {Routing_Paths} from "../app/config";

export type RoutingPaths = (typeof Routing_Paths)[keyof typeof Routing_Paths]

export type MyRouteObject = Omit<RouteObject, "path" | "index"> & {
    path: RoutingPaths,
    index?: false
};