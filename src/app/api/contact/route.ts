import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 * Expects JSON:
 * {
 *   firstName: string;
 *   lastName:  string;
 *   email:     string;
 *   phone:     string;
 *   message:   string;
 * }
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            message: string;
        };

        // Build a readable text / HTML e-mail
        const textContent = `
New contact enquiry

Name   : ${body.firstName} ${body.lastName}
Email  : ${body.email}
Phone  : ${body.phone}

Message:
${body.message}
`;

        // Configure Nodemailer transport using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,          // e.g. "smtp.gmail.com"
            port: Number(process.env.SMTP_PORT),  // e.g. 465
            secure: true,
            auth: {
                user: process.env.SMTP_USER,        // "<your-smtp-user>"
                pass: process.env.SMTP_PASS,        // "<your-smtp-password>"
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: "contact@urbanpestmaster.in",
            subject: "New website enquiry",
            text: textContent,
        });

        return NextResponse.json({ok: true});
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            {ok: false, message: "Unable to send message."},
            {status: 500}
        );
    }
}