import React from "react";
import { useAboutContent } from "./hook/hook";
import { AboutView } from "./About.view";

export const AboutController: React.FC = () => {
    const { data, loading, error } = useAboutContent();

    if(!data || loading || error) {
        return null;
    }
  return <AboutView data={data}/>;
}