import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function sendEml() {
    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: "Acme <onboarding@resend.dev>",
            to: ["szmydlukasz30@gmail.com"],
            subject: "hello world",
            html: "<strong>it works!</strong>",
        }),
    });

    if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
    }
}