import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

// Ensure API key is present before initializing Resend completely
const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Fallback if Supabase is not configured locally
    if (!supabase) {
      console.warn("Supabase is not configured. Simulating success for waitlist.");
      return NextResponse.json({ success: true, simulated: true }, { status: 200 });
    }

    // Insert into Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (dbError) {
      if (dbError.code === '23505') { // Postgres unique violation error code
        return NextResponse.json({ error: "You are already on the waitlist!" }, { status: 400 });
      }
      throw dbError;
    }

    // Send confirmation email via Resend
    if (resend) {
      // NOTE: Update 'hello@inqwiklly.com' to your verified domain on Resend
      const { error: emailError } = await resend.emails.send({
        from: "INQWIKLLY <onboarding@resend.dev>", // Using resend testing domain by default
        to: email,
        subject: "You're on the list - INQWIKLLY",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #0A0A0A; font-weight: 900; text-transform: uppercase;">You're in.</h1>
            <p style="color: #4A4A4A; font-size: 16px; line-height: 1.5;">Thanks for joining the INQWIKLLY waitlist.</p>
            <p style="color: #4A4A4A; font-size: 16px; line-height: 1.5;">We're building a new-age news platform that cuts out the noise. You'll be the first to know when we launch.</p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #E8382A;">
              <p style="color: #0A0A0A; font-weight: bold; margin: 0;">Know more. Scroll less.</p>
              <p style="color: #E8382A; font-weight: bold; margin: 5px 0 0 0;">INQWIKLLY</p>
            </div>
          </div>
        `,
      });

      if (emailError) {
        console.error("Resend Email Error:", emailError);
        // Continue anyway since DB insert succeeded
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
