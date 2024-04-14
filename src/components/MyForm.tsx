"use client";

import { tStateDispatch } from "@/app/pages/page";
import axios from "axios";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";

interface iFormState {
  name: string;
  email: string;
  password: string;
}

export default function ({
  globaldispatch,
}: {
  globaldispatch: tStateDispatch;
}) {
  const [form, formDispatch] = useReducer(
    (
      state: iFormState,
      action: { type: string; payload: Partial<iFormState> },
    ) => {
      return { ...state, ...action.payload };
    },
    { name: "", password: "", email: "" },
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(form);
        }}
      >
        <input value={"send"} type="submit" />
        <input
          onInput={(e) => {
            formDispatch({
              type: "update",
              payload: { name: e.currentTarget.value },
            });
          }}
          type="text"
          value={form.name}
          placeholder="name"
        />
        <input
          onInput={(e) => {
            formDispatch({
              type: "update",
              payload: { password: e.currentTarget.value },
            });
          }}
          type="text"
          value={form.password}
          placeholder="password"
        />
        <input
          onInput={(e) => {
            formDispatch({
              type: "update",
              payload: { email: e.currentTarget.value },
            });
          }}
          type="text"
          value={form.email}
          placeholder="email"
        />
      </form>
    </div>
  );
}

async function onSubmit(data: iFormState) {
  const response = await axios
    .post("http://localhost:3000/test", data)
    .catch((err) => {
      console.log({ status: "fail", message: err });
    });

  if (response) {
    console.log(response);
  }
}
