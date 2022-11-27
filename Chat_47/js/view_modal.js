export function viewModal(hiddenBlock, activeBlock = null) {
  hiddenBlock.style.display = 'none';
  if (activeBlock) {
    activeBlock.classList.remove('hidden');
    activeBlock.classList.add('active');
  }
}
