import { VinylModule } from './vinyl.module';

describe('VinylModule', () => {
  let vinylModule: VinylModule;

  beforeEach(() => {
    vinylModule = new VinylModule();
  });

  it('should create an instance', () => {
    expect(vinylModule).toBeTruthy();
  });
});
