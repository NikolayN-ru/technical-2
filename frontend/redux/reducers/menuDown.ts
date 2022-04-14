const initialState = [
  { id: 1, title: "ОБъявления", icon: "/list.svg" },
  { id: 2, title: "Магазины", icon: "/magazine.svg" },
  { id: 3, title: "Благотворительность", icon: "/handle.svg" },
];

export const menuDown = (state = initialState, { type, payload }:any) => {
  switch (type) {
    default:
      return state;
  }
};
