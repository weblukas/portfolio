import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


