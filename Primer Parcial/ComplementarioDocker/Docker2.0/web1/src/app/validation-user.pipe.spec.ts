import { ValidationUserPipe } from './validation-user.pipe';

describe('ValidationUserPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidationUserPipe();
    expect(pipe).toBeTruthy();
  });
});
