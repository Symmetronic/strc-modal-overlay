import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('modal-overlay', () => {
  let element: E2EElement;
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<strc-modal-overlay />');

    element = await page.find('strc-modal-overlay');
  });

  it('renders', () => {
    expect(element).toHaveClass('hydrated');
  });
});
