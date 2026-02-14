// import WebSocket from "ws";

// const price = () => {
//     const url = `wss://fstream.binance.com/stream?streams=!markPrice@arr`;
//     const ws = new WebSocket(url);

//     ws.on("message", (event) => {
//         try {
//             const data = JSON.parse(event.toString());

//             if (data?.data) {
//                 // socket.emit("price", data.data);
//                 // // console.log(data.data[5])

//             }
//         } catch (err) {
//             console.error("Parse error:", err);
//         }
//     });

//     ws.on("error", (err) => {
//         console.error(`WebSocket error:`, err);
//     });

//     ws.on("close", () => {
//         console.warn(`Binance WebSocket closed`);
//     });

//     ws.on("disconnect", () => {
//         ws.close();
//     });
// };