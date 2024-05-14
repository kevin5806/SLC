"use server";

import axios from "axios";
import { connectDB } from "./db";
import Tokens from "./modules/db/models/tokens";

export const getToken = async () => {
    await connectDB();

    const dbToken = await Tokens.findOne();

    if (dbToken) return dbToken.token;

    const url = "https://px1.tuyaus.com/homeassistant/auth.do";

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = {
        userName: process.env.SMART_LIFE_USER as string,
        password: process.env.SMART_LIFE_PASSWORD as string,
        countryCode: "us",
        bizType: "smart_life",
        from: "tuya",
    };

    const res = await axios.post(url, data, { headers });

    await Tokens.create({
        token: res.data.access_token,
    });

    return res.data.access_token;
};
