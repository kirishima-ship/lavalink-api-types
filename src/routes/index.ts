export const Routes = {
	/**
	 * Route for:
	 * - GET /loadtracks
	 */
	loadTracks(identifier: string) {
		return `/loadtracks?identifier=${identifier}` as const;
	},
	/**
	 * Route for:
	 * - GET /decodetrack
	 */
	decodeTrack(track: string) {
		return `/decodetrack?track=${track}` as const;
	},
	/**
	 * Route for:
	 * - POST /decodetracks
	 */
	decodeTracks() {
		return `/decodetracks` as const;
	},
	/**
	 * Route for:
	 * - GET /routeplanner/status
	 */
	routePlannerStatus() {
		return `/routeplanner/status` as const;
	},
	/**
	 * Route for:
	 * - POST /routeplanner/free/address
	 */
	routePlannerFreeAddress() {
		return `/routeplanner/free/address` as const;
	},
	/**
	 * Route for:
	 * - POST /routeplanner/free/all
	 */
	routePlannerFreeAll() {
		return `/routeplanner/free/all` as const;
	}
};
