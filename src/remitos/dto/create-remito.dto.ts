export class CreateRemitoDto {
    readonly articulos: Record<string, number | string>;
    readonly entregadoPor: string;
    readonly recibidoPor: string;
    readonly fechaEntrega: Date;
  }
  