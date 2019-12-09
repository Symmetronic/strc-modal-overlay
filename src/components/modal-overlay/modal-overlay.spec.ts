import { ModalOverlay } from './modal-overlay';

describe('modal-overlay', () => {
  let modalOverlay: ModalOverlay;

  beforeEach(() => {
    modalOverlay = new ModalOverlay();
  });

  it('builds', () => {
    expect(modalOverlay).toBeTruthy();
  });
});
