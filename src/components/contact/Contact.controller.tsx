import React from "react";
import { useContact } from "./hook/hook";
import { ContactView } from "./Contact.view";

export const ContactController: React.FC = () => {
    const { data, loading, error } = useContact();

    if(!data || loading || error) {
        return null;
    }
  return <ContactView data={data} />;
}