export interface ClosePosition {
    orderId: string;
    currencyPair: string;
    orderQuantity: number;
    entryPrice: number;
    orderType: string;
    positionStatus: string;
    orderSide: "BUY" | "SELL";
    _id: string;
  }
 export  interface OpenPosition {
    orderId: string;
    currencyPair: string;
    orderQuantity: number;
    entryPrice: number;
    orderType: string;
    positionStatus: string;
    orderSide: "BUY" | "SELL";
    _id: string;
  }