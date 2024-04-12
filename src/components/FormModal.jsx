import { Button, Form, Modal } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // bütün inputlardaki değerlerden bir nesne oluştur
    // formData clasından örnek oluştur
    const formData = new FormData(e.target);

    // formdaki inputların verisni objeye çeviriyoruz
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      // güncellenecek eleman varsa güncellenceğini haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // yoksa reducera veri ekleneceğini haber ver
      dispatch(addTask(taskData));
    }

    // modalı kapat
    handleClose();
  };
  return (
    <Modal centered className="text-black" show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              name="title"
              placeholder="Örn:Navbar'ı Düzenle"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İş Veren</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              name="author"
              placeholder="Örn:Ahmet"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Görevli</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              placeholder="Örn:Mehmet"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
              required
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
