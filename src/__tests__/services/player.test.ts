import { CLIENT_ID, CLIENT_SECRET } from "../../utils/constants";
import { SpotifyClient } from "../../SpotifyClient";

describe("player service", () => {
  let spotifyClient: SpotifyClient;

  beforeEach(() => {
    spotifyClient = new SpotifyClient(CLIENT_ID!, CLIENT_SECRET!);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should get current playing track", async () => {
    const result = await spotifyClient.player.getCurrentPlayingTrack();
    console.log(result);
  });
});
