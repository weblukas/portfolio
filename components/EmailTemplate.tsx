import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,email,message
}) => (
    <div>
        <h1>Contact form submission</h1>
        <p>
            From <strong>{firstName}</strong> at {email}
        </p>
        <h2>Message:</h2>
        <p>{message}</p>
    </div>
);
