"use client";
import Image from "next/image";
import { buttonClick } from "./lib/uiBurron";
import { toast } from "sonner";

export default function Home() {
    return (
        <main className="w-full h-full flex items-center justify-center flex-col">
            <div className="bulb-container">
                <div className="wire"></div>
                <div className="connector">
                    <div className="grove"></div>
                    <div className="grove"></div>
                    <div className="grove"></div>
                </div>
                <div className="bulb">
                    <div className="metal-wire"></div>
                    <div className="metal-wire"></div>
                    <div className="metal-wire"></div>
                </div>
            </div>

            <form
                className="flex flex-col gap-y-10"
                action={async (formData) => {
                    const res = await buttonClick(formData);

                    if (res.code === 500) {
                        toast.error(res.text);
                    }
                }}
            >
                <div className="container">
                    <input
                        name="pin"
                        required
                        type="password"
                        className="input"
                    ></input>
                    <label className="label">Pin</label>
                </div>

                <div className="flex gap-x-20">
                    <div className="flex flex-col items-center gap-y-1">
                        <button
                            type="submit"
                            value="1"
                            name="value"
                            className="button"
                        >
                            <Image
                                src="/svg/power-on.svg"
                                alt="bin-svg"
                                width={20}
                                height={20}
                            />
                        </button>
                        <p>on</p>
                    </div>

                    <div className="flex flex-col items-center gap-y-1">
                        <button
                            type="submit"
                            value="0"
                            name="value"
                            className="button"
                        >
                            <Image
                                src="/svg/power-off.svg"
                                alt="bin-svg"
                                width={20}
                                height={20}
                            />
                        </button>
                        <p>off</p>
                    </div>
                </div>
            </form>
        </main>
    );
}
