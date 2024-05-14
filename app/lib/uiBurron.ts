"use server";

import { NextRequest, NextResponse } from "next/server";
import { command } from "./command";

export const buttonClick = async (formData: FormData) => {
    console.log("call");

    let value: any = formData.get("value");
    let pin = formData.get("pin");

    if ((pin as string) !== (process.env.APPLICATION_UI_PIN as string))
        return { code: 500, text: "wrong pin" };

    if (value == "1") {
        value = 1;
    } else {
        value = 0;
    }

    const res = await command("turnOnOff", value);

    return res;
};
