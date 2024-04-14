"use client";

import { Dispatch, useEffect, useReducer, useState } from "react";
import styles from "../page.module.css";
import axios from "axios";
import { iGlobalState, tReducerType, UserData } from "./types/types";
import MyForm from "@/components/MyForm";

const reducer = (
  state: iGlobalState,
  action: { type: string; payload: Partial<iGlobalState> },
) => {
  return { ...state, ...action.payload };
  switch (action.type) {
    case "set_current":
      console.log(`payload: ${JSON.stringify(action.payload)}`);

      const pl = action.payload;

      return state;

    case "put":
      /*
      const arr = [
        ...state.map((elemOfTHeState) => {
          const elem = action.payload.find((value, i) => {
            console.log(`interation : ${JSON.stringify(value)}`);
            return value.id === elemOfTHeState.id;
          });

          if (elem) {
            elemOfTHeState = {
              id: elem.id,
              name: elem.name,
              password: elem.password,
              email: elem.email,
            };
            action.payload = action.payload.filter(
              (payloadElem) => payloadElem.id !== elem.id,
            );
          }

          return elemOfTHeState;
        }),
      ];

      return [
        ...arr,
        ...action.payload.map((elem) => {
          return {
            name: elem.name,
            email: elem.email,
            password: elem.password,
            id: elem.id,
          };
        }),
      ]; */
      return state;
    default:
      return state;
  }
};

export type tStateDispatch = Dispatch<{
  type: string;
  payload: Partial<iGlobalState>;
}>;

export default function Home() {
  const [state, dispatch] = useReducer<tReducerType>(reducer, {
    users: [],
    current: null,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main className={styles.main}>
      <section>
        <h2>added user</h2>
        <div>
          <div>{state.current?.name}</div>
          <div>{state.current?.password}</div>
          <div>{state.current?.email}</div>
          <div>{state.current?.id}</div>
        </div>
      </section>
      <MyForm globaldispatch={dispatch} />
    </main>
  );
}

async function handler_onClick(dispatch: tStateDispatch) {
  const baseurl = "http://localhost:3000";

  const endpoint = "test";

  const endPoint = ({
    baseurl,
    endpoint,
  }: {
    baseurl: string;
    endpoint: string | undefined;
  }) => {
    const str = `${baseurl}/${endpoint ? endpoint : ""}`;

    return str;
  };

  axios
    .post(endPoint({ baseurl, endpoint }), {})
    .then((response) => {
      const data: UserData = response.data.payload;
      console.log({ message: "update from axios", data });

      dispatch({ type: "add", payload: { current: data } });
    })
    .catch((err) => {
      console.log(err);
    });
}
