"use server";

import axios from "axios";
import { getToken } from "./getToken";

export const command = async (name: string, value: number) => {
    /* name: "turnOnOff", value: 1/0 */
    /* name: string, value: number */

    let url = "https://px1.tuyaeu.com/homeassistant/skill";

    let data = {
        header: {
            name: name,
            namespace: "control",
            payloadVersion: 1,
        },
        payload: {
            accessToken: await getToken(),
            devId: process.env.SMART_LIFE_DEVICE_ID as string,
            value: value as number,
        },
    };

    const res = await axios.post(url, data);

    return res.data;
};
