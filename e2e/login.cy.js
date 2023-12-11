import { login } from './functionHelper.cy.js';

describe('Login in subcargo', () => {
  it('passes', () => {
    login('15647643','PadreAusente2023')
  });
});
