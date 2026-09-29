export type ActionState = {
  message: string;
  errors: Record<string, string[]>;
};

export const initialState: ActionState = {
  message: "",
  errors: {},
};
