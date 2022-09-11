// Kod stworzony przez hexa (Dostałem pozwolenie jak coś)
const discordId = "907703983957741598";
function updateDiscord(data) {
const { username, discriminator, avatar } = data.discord_user;
const status = data.discord_status;
const statusBar = document.getElementById('status-bar');
const statuses = {
  online: "Online",
  idle: "Zaraz wracam",
  dnd: "Nie przeszkadzać :)",
  offline: "Offline",
};
  statusBar.innerHTML = statuses[status];
}  
lanyard({
  userId: discordId,
  socket: true,
  onPresenceUpdate: updateDiscord
}) 