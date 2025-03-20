const clientId = import.meta.env.VITE_CLIENT_ID;
const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("client_secret", import.meta.env.VITE_CLIENT_SECRET);
  params.append("grant_type", "client_credentials");
  const response = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = await response.json();

  return data.access_token;
};

const getGames = async (gameName: string) => {
  const token = await getAccessToken();

  const response = await fetch(
    `https://api.twitch.tv/helix/games?name=${gameName}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Client-Id": clientId,
      },
    }
  );
  const data = await response.json();
  return data;
};
const getUsers = async (gameId: string) => {
  const token = await getAccessToken();

  const response = await fetch(
    `https://api.twitch.tv/helix/streams?game_id=${gameId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Client-Id": clientId,
      },
    }
  );
  const data = await response.json();
  return data;
};
export const getGameUsers = async (gameName: string) => {
  const games = await getGames(gameName);
  if (games && games.data[0]) {
    const users = await getUsers(games.data[0].id);
    return users.data;
  } else {
    return [];
  }
};
