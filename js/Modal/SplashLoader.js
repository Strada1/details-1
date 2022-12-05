import Modal from './Modal';

class SplashLoader extends Modal {
  constructor() {
    super('loader-dialog');
  }
}

// TODO: refactor
export default new SplashLoader();
