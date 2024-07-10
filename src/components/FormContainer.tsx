import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
interface FormContainerProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContainer: React.FC<FormContainerProps> = ({
  showForm,
  setShowForm,
}) => {

  const [classId, setClassId] = useState<string>('');
  const [className, setClassName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Class ID:', classId);
    console.log('Class Name:', className);
    setShowForm(false);
  };
  if (!showForm) {
    return null;
  }
  return (
    showForm && (
      <div id="formContainer">
        <form id="myForm" title="Thêm lớp học" onSubmit={handleSubmit}>
          <span id="closeBtn" onClick={() => setShowForm(false)}>
            &times;
          </span>
          <div id="form_content">
            <Input
              id="class_id"
              name="Mã lớp"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              required
            />
            <br />
            <br />
            <Input
              id="class_name"
              name="Tên lớp"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
            <br />
            <br />
          </div>
          <Button type="submit">Lưu</Button>
        </form>
      </div>
    )
  );
};
export default FormContainer;