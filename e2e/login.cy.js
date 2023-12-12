import { login ,crearSolicitud} from './functionHelper.cy.js';

describe('Login in subcargo', () => {
  it('passes', () => {
    login('588438300','123456')
    crearSolicitud()
  });
});
