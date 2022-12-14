import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardComponentTemplate } from "src/components/CardComponent";
import {
  TableComponentDefault,
  TableComponentAction,
} from "src/components/TableComponent";
import { LoadingContext } from "src/context/LoadingContext";
import { UserContext } from "src/context/UserContext";
import { TemplateServices } from "src/services/TemplateServices";

export function ListCertificateTemplatePage() {
  const { user, setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [templates, setTemplates] = useState([]);
  const location = useLocation();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    setLoading(true);
    const templateServices = new TemplateServices();
    const res = await templateServices.getAll();

    setTemplates(res);
    setLoad(false);
    setLoading(false);
  }

  function handleEdit(id) {}

  function handleDelete(id) {}

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-4">
        {templates.map((el, idx) => {
          return (
            <CardComponentTemplate
              key={idx}
              _id={el._id}
              title={el.title.value}
              description={el.description.value}
              image={el.image.path}
            />
          );
        })}
      </div>
    </>
  );
}
