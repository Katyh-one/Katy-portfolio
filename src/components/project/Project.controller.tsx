import { useProjectContent } from "./hook/hook";
import { ProjectView } from "./Project.view";

export const ProjectController: React.FC = () => {
    const { data, loading, error } = useProjectContent();

    if(!data || loading || error) {
        return null;
    }
  return <ProjectView data={data} />;
}