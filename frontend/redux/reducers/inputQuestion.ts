import { INPUT_QUESTION } from "../actionTypes";

interface inputQuestionStateProps {
  input: string;
}

const initialState: inputQuestionStateProps = { input: "asd" };

interface inputQuestionProps {
  type: string;
  payload: any;
}

export const inputQuestion = (
  state = initialState,
  { type, payload }: inputQuestionProps
) => {
  switch (type) {
    case INPUT_QUESTION:
      return {
        input: payload,
      };
    default:
      return state;
  }
};
