const SCROLL = {
  STEP: 30,
  UNITS: 'px',
  DIRECTIONS: {
    UP: 'up',
    DOWN: 'down'
  }
};


const getTopOffset = (parentElement, childElement) => getCoords(parentElement).top - getCoords(childElement).top;

const getBottomOffset = (parentElement, childElement) => getCoords(childElement).bottom - getCoords(parentElement).bottom;


const getCoords = (element) => {
  const box = element.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
};


const scroll = (parentElement, childElement, direction) => {
  if (direction === SCROLL.DIRECTIONS.UP) {
    return scrollUp(parentElement, childElement);
  }

  if (direction === SCROLL.DIRECTIONS.DOWN) {
    return scrollDown(parentElement, childElement);
  }
};


const scrollUp = (parentElement, childElement) => {
  const topOffset = getTopOffset(parentElement, childElement);
  const bottomOffset = getBottomOffset(parentElement, childElement);

  if (topOffset === 0) {
    return 0;
  }

  childElement.style.bottom = `${-1 * (bottomOffset + Math.min(SCROLL.STEP, topOffset))}px`;
  return topOffset;
};


const scrollDown = (parentElement, childElement) => {
  const bottomOffset = getBottomOffset(parentElement, childElement);

  if (bottomOffset === 0) {
    return;
  }

  childElement.style.bottom = `${-1 * (bottomOffset - Math.min(SCROLL.STEP, bottomOffset))}px`;
};


export {
  getTopOffset,
  getBottomOffset,
  getCoords,
  scroll,
  scrollUp,
  scrollDown,
  SCROLL
};
