import React, { useState } from "react";
import { PrimaryButton } from "../UI";
import { Board, RootState } from "../../store/types";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { deleteBoard, getBoardList, updateBoard } from "../../store/actions/boardActions";
import { CustomModal } from "../Modal/CustomModal";
import { Container } from "react-bootstrap";
import "./styles.css";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";

type HeaderProps = {
  heading?: string;
  boardData?: any;
  setSelectedBoard?: (e?: any) => void | undefined;
  boardList?: Board[];
};

interface FormValues extends FieldValues {
  id: string | number;
  title: string;
  columns: { name: string }[];
}

export const Header: React.FC<HeaderProps> = (
  { heading, boardData, setSelectedBoard, boardList }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false)

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>({
    defaultValues: {
      id: boardData ? boardData?.id : '',
      title: boardData ? boardData?.title : "",
      columns: boardData ? boardData?.columns : [{ name: "" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns"
  });

  const onSubmit = (data: FormValues) => {
    const updatedBoard: Board = {
      id: data.id,
      title: data.title,
      columns: data.columns.map((col, index) => ({
        id: `column-${index + 1}`,
        name: col.name
      }))
    };
    dispatch(updateBoard(updatedBoard));
    if (setSelectedBoard) {
      setSelectedBoard(updatedBoard);
    }
    reset();  // Reset the form to initial state
    dispatch(getBoardList())
    setShowUpdateModal(false);
  };

  const handleDeleteBoard = () => {
    setShowDeleteModal(true);
    boardData && dispatch(deleteBoard(boardData)).then(() => {
      setShowDeleteModal(false)
      setSelectedBoard && setSelectedBoard("")
    });
  };
  const handleOpenDeleteModal = () => {
    setShowDeleteModal(true)
  }
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  }

  const handleOpenUpdateModal = () => {
    setShowUpdateModal(true)
  }
  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  }

  return (
    <header className="header w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <h6 style={{ width: '42%' }}>{"Board Management"}</h6>
        <div className="container-fluid">
          <h4>{heading}</h4>
          <div className="d-flex justify-content-between">
          <PrimaryButton title={"Update Board"} className="mr-2" variant={'info'} onClick={handleOpenUpdateModal} />
          <PrimaryButton title={"Delete Board"} variant={boardList?.length === 1 ? "disabled" : 'danger'} onClick={handleOpenDeleteModal} disabled={boardList?.length === 1} />
          </div>
          
        </div>
      </nav>

      {showDeleteModal &&
        (
          <CustomModal show={showDeleteModal} onHide={handleCloseDeleteModal} title="Delete Board" >
            <Container>
              <h6>Are you sure want to delete this board?</h6>
              <div className="button-container mt-5">
                <PrimaryButton variant="primary" className="action-button" title="Confirm" onClick={handleDeleteBoard} />
                <PrimaryButton variant="danger" className="action-button" title="Cancel" onClick={handleCloseDeleteModal} />
              </div>
            </Container>
          </CustomModal>
        )}

      {showUpdateModal &&
        (
          <CustomModal show={showUpdateModal} onHide={handleCloseUpdateModal} title="Update Board" >
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                  <label htmlFor="title" className="form-label">Board Title:</label>
                  <input type="text" className="form-control" id="title" {...register("title", { required: "Title is required" })} />
                  {errors.title && <span className="text-danger">{errors.title.message}</span>}
                </div>
                {fields.map((item, index) => (
                  <div key={item.id} className="mb-3 ">
                    <label htmlFor={`columns[${index}].name`} className="form-label">Column Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register(`columns.${index}.name` as const, { required: "Column name is required" })}
                    />
                    {errors.columns?.[index]?.name && (
                      <span className="text-danger">{errors?.columns[index]?.name?.message}</span>
                    )}
                    <PrimaryButton title="Remove" variant="danger" type="button" className="mt-1 w-100" onClick={() => remove(index)} />
                  </div>
                ))}
                <button type="button" className="btn btn-secondary mt-3 mb-2 w-100" onClick={() => append({ name: "" })}>+ Add Column</button>
                <div className="button-container mt-5">
                  <PrimaryButton type="submit" variant="primary" className="action-button" title="Update Board" />
                  <PrimaryButton variant="danger" title="Cancel" className="action-button" onClick={() => setShowUpdateModal(false)} />
                </div>
              </form>
            </Container>
          </CustomModal>
        )}
    </header>
  );
};
