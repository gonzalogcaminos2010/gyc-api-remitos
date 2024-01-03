import { Test, TestingModule } from '@nestjs/testing';
import { RemitosService } from './remitos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Remito } from './remito.entity';
import { Usuario } from '../usuarios/usuario.entity';
import { Repository } from 'typeorm';

describe('RemitosService', () => {
  let service: RemitosService;
  let usuarioRepository: Repository<Usuario>;
  let remitoRepository: Repository<Remito>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemitosService,
        {
          provide: getRepositoryToken(Remito),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Usuario),
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RemitosService>(RemitosService);
    usuarioRepository = module.get<Repository<Usuario>>(getRepositoryToken(Usuario));
    remitoRepository = module.get<Repository<Remito>>(getRepositoryToken(Remito));
  });

  it('debería crear un remito y asociarlo con un usuario', async () => {
    const usuario = {
      id: 1,
      nombre: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      remitosCreados: [],
      remitosRecibidos: [],
    };
    const remitoData = { articulos: { item1: 10 }, entregadoPor: 'John', recibidoPor: 'Jane', fechaEntrega: new Date(), creadorId: usuario.id };
    const remito = {
      id: 1, // Asegúrate de incluir todas las propiedades requeridas por la entidad Remito
      articulos: { item1: 10 },
      entregadoPor: 'John',
      recibidoPor: 'Jane',
      fechaEntrega: new Date(),
      creador: usuario, // El usuario simulado creado anteriormente
      receptor: usuario, // Puedes usar el mismo usuario o crear otro si es necesario
    };
    

    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(usuario);
    jest.spyOn(remitoRepository, 'create').mockReturnValue(remito);
    jest.spyOn(remitoRepository, 'save').mockResolvedValue(remito);

    expect(await service.create(remitoData)).toEqual(remito);
    expect(usuarioRepository.findOne).toBeCalledWith(usuario.id);
    expect(remitoRepository.create).toBeCalledWith(remitoData);
    expect(remitoRepository.save).toBeCalledWith(remito);
  });

  // ... otras pruebas ...
});
