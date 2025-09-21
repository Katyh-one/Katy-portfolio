import React from "react";
import type { UseContactResult } from "./hook/hook";

type ContactViewProps = {
  data: UseContactResult['data'];
};

export const ContactView: React.FC<ContactViewProps> = ({ data }) => (
    <div>
        <h2>Contact Me</h2>
        {data.map((item, index) => (
            <div key={index}>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>LinkedIn: {item.linkedIn}</p>
                <p>GitHub: {item.github}</p>
            </div>
        ))}
    </div>
);