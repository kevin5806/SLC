import { NextRequest, NextResponse } from "next/server";
import { command } from "@/app/lib/command";

export async function GET(req: NextRequest) {
    /* name: "turnOnOff", value: 1/0 */

    const name = req.nextUrl.searchParams.get("name");
    const value: any = req.nextUrl.searchParams.get("value");
    const code = req.nextUrl.searchParams.get("code");

    if (!value || !name || !code)
        return NextResponse.json({ error: "no params" });

    if (code !== (process.env.APPLICATION_CODE as string))
        return NextResponse.json({ error: "no code" });

    const res = await command(name, value as number);

    return NextResponse.json(res);
}
