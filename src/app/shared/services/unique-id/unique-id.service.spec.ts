import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate ID when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicated IDs when called multiple times`, () => {
    const ids = new Set();
    const loopLength = 50;
    for (let i = 0; i < loopLength; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(loopLength);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    const loopLength = 50;
    for (let i = 0; i < loopLength; i++) {
      service.generateUniqueIdWithPrefix('app');
    }
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(loopLength);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw error when called with an empty argument`, () => {
    const emptyArguments = ['', '0', '1'];
    emptyArguments.forEach(argument => {
      expect(() => service.generateUniqueIdWithPrefix(argument))
        .withContext(`Argument ${argument} is not an empty value`)
        .toThrow();
    });
  });
});
