import { io } from "socket.io-client";

// Anslut till backend-servern
const socket = io("http://localhost:3000", {
  transports: ["websocket"],
  reconnectionAttempts: 5, // Försök att återansluta 5 gånger om anslutningen bryts
});

export default socket;
