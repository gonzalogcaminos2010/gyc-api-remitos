export class PatchRemitoDto {
  readonly articulos: Record<string, number | string>;
  readonly entregadoPor: string;
  readonly recibidoPor: string;
  readonly fechaEntrega: Date;
  readonly origenId: number;
readonly destinoId: number;
  }
  