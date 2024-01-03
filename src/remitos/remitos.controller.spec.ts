import { Test, TestingModule } from '@nestjs/testing';
import { RemitosController } from './remitos.controller';

describe('RemitosController', () => {
  let controller: RemitosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemitosController],
    }).compile();

    controller = module.get<RemitosController>(RemitosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
