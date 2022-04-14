
export const countItemsBtn = (state:any) => {
  const replaceCountBtn = (type:string, value: boolean | string | null, index = 0) => {
    state.mockDataItems.data.forEach((item: any) => {
      item[type] == value && index++;
    });
    return index;
  };

  const total = state.mockDataItems.data.length;
  const active = replaceCountBtn("active", true);
  const noActive = replaceCountBtn("active", false);
  const buy = replaceCountBtn("type", "buy");
  const sold = replaceCountBtn("active", null);

  return { total, active, noActive, buy, sold };
};
