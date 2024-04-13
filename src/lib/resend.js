import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_TOKEN);


export default async function Email({to,subject,html}){
resend.emails.send({
  from: 'onboarding@resend.dev',
  to,
  subject,
  html
});
}

