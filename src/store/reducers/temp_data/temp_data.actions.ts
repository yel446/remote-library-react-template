import temp_dataTypes from "./temp_data.types";

interface IUpdateEmail {
  type: temp_dataTypes.UPDATE_EMAIL;
  payload: string;
}

interface IGetToken {
  type: temp_dataTypes.GET_TOKEN;
  payload: string;
}

export type TempDataAction = IUpdateEmail | IGetToken;

export const updateEmail = (email: string) => ({
  type: temp_dataTypes.UPDATE_EMAIL,
  payload: email,
});

export const getToken = (token: string) => ({
  type: temp_dataTypes.GET_TOKEN,
  payload: token,
});
