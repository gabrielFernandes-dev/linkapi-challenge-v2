import { Test, TestingModule } from '@nestjs/testing';
import { BlingService } from './bling.service';

describe('BlingService', () => {
  let service: BlingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlingService],
    }).compile();

    service = module.get<BlingService>(BlingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
