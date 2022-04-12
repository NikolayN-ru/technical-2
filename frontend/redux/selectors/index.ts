export const countItemsBtn = (state) => {
  const replaceCountBtn = (type, value, index = 0) => {
    state.mockDataItems.data.forEach((item) => {
      item[type] == value && index++;
    });
    return index;
  };

  const total = state.mockDataItems.data.length;
  const active = replaceCountBtn("active", true);
  const noActive = replaceCountBtn("active", false);
  const buy = replaceCountBtn("type", "buy");
  const sold = replaceCountBtn("active", null);

  //   let active = 0;
  //   state.mockDataItems.data.forEach((item) => {
  //     item.active == true && active++;
  //   });

  //   let noActive = 0;
  //   state.mockDataItems.data.forEach((item) => {
  //     item.active == false && noActive++;
  //   });

  //   let buy = 0;
  //   state.mockDataItems.data.forEach((item) => {
  //     item.type == 'buy' && buy++;
  //   });

  //   let sold = 0;
  //   state.mockDataItems.data.forEach((item) => {
  //     item.active == null && sold++;
  //   });
  return { total, active, noActive, buy, sold };
};

export const getItemData = (id, state) => {
  const data = state.mockDataItems.data[id]
  // console.log(state.mockDataItems.data, id, 'state')
  return data
}