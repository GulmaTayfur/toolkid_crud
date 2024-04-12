import { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();

  const counterState = useSelector((store) => store.counterReducer);
  const crudState = useSelector((store) => store.crudReducer);
  console.log(crudState);

  const [isOpen, setIsOpen] = useState(false);

  // düzenlenecek elemanın statei

  const [editItem, setEditItem] = useState(null);
  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
      </Stack>

      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.isDarkTheme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>İş Veren</th>
            <th>Görevli</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* modal */}
      <FormModal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
        editItem={editItem}
      />
    </div>
  );
};

export default CrudPage;
