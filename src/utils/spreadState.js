let currentSpread = 0;
let alertSpread = 0;

const spreadState = {
  setSpread: (newSpread) => {
    currentSpread = newSpread;
  },
  
  setAlertSpread: (newAlertSpread) => {
    alertSpread = newAlertSpread;
  },

  getSpread: () => {
    return currentSpread;
  },

  getAlertSpread: () => {
    return alertSpread;
  },
};

export default spreadState;