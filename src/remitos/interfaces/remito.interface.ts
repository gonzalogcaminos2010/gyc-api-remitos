export interface Remito {
    id: number;
    articulos: Record<string, number | string>;
    entregadoPor: string;
    recibidoPor: string;
    fechaEntrega: Date;
  }
  