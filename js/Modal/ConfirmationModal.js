import UiModal from './UiModal';

const DIALOG_CLASS_NAME = 'confirmation-dialog';

export default class ConfirmationModal extends UiModal {
  constructor() {
    super(DIALOG_CLASS_NAME);
  }
}
