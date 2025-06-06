 (() => {
  const triggers = document.getElementsByClassName('modal-trigger');
  const triggerArray = Array.from(triggers).entries();
  const modals = document.getElementsByClassName('dialog');
  const closeButtons = document.getElementsByClassName('btn-close');

  for (const [index, trigger] of triggerArray) {
    const openModal = () => {
      modals[index].classList.add('show');
      modals[index].showModal();
      closeButtons[index].autofocus = true;
    };
    const closeModal = () => {
      modals[index].classList.remove('show');
      modals[index].close();
    };
    trigger.addEventListener('click', openModal);
    closeButtons[index].addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }
})();
