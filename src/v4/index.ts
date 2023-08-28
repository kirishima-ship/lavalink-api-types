import { RoutePlannerClass, IpBlockType } from "../common";

/**
 * @description RouteplannerStatus sent by lavalink.
 */
export interface RoutePlannerStatusResponse {
    class: RoutePlannerClass;
    details: {
        ipBlock: {
            type: IpBlockType;
            size: number;
        };
        failingAddresses: {
            failingAddress: string;
            failingTimestamp: number;
            failingTime: string;
        }[];
        blockIndex: number;
        currentAddressIndex: string;
    };
}

export * from "./routes";
export * from "../common";
