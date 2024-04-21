import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { Container } from "react-bootstrap";
import { useForm, useFieldArray, FieldValues, } from "react-hook-form";
import { PrimaryButton } from "../UI";
import { CustomModal } from "../Modal/CustomModal";
import { createBoard, getBoardList } from "../../store/actions/boardActions";
import { generateUniqueId } from "../../utils/helperFunctions";
import { Board, RootState } from "../../store/types";
import "./styles.css";
interface SidebarProps {
    boardList?: Board[];
    selectedBoard?: Board;
    setSelectedBoard?: (value: Board) => void;
}

interface FormValues extends FieldValues {
    title: string;
    columns: { name: string }[];
}

export const Sidebar: React.FC<SidebarProps> = ({ boardList, selectedBoard, setSelectedBoard }) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
    const [showAddBoardModal, setShowAddBoardModal] = useState(false);
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormValues>({
        defaultValues: {
            title: "",
            columns: [{ name: "" }]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "columns"
    });

    const onSubmit = (data: FormValues) => {
        const newBoard: Board = {
            id: boardList ? generateUniqueId(boardList) : 1, 
            title: data.title,
            columns: data.columns.map((col, index) => ({
                id: `column-${index + 1}`,
                name: col.name
            }))
        };
        dispatch(createBoard(newBoard));
        reset();  
        dispatch(getBoardList())
        setShowAddBoardModal(false);
    };

    return (
        <aside>
            <div className=" ">
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="list-group list-group-flush">
                        <h6 className="board-heading">All Boards ({boardList?.length})</h6>
                        <ul>
                            {boardList?.map((board, index) => (
                                <li key={`board${index + 1}`} className={board.id === selectedBoard?.id ? 'active' : ''} onClick={() => setSelectedBoard?.(board)}>{board.title}</li>
                            ))}
                            <li>
                                <PrimaryButton title="+ Create New Board" variant="primary" className="w-100 mt-5" onClick={() => setShowAddBoardModal(true)} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {showAddBoardModal && (
                <CustomModal show={showAddBoardModal} onHide={() => setShowAddBoardModal(false)} title="Create New Board">
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
                                <PrimaryButton type="submit" variant="primary" className="action-button" title="Create New Board" />
                                <PrimaryButton variant="danger" title="Cancel" className="action-button" onClick={() => setShowAddBoardModal(false)} />
                            </div>
                        </form>
                    </Container>
                </CustomModal>
            )}
        </aside>
    );
};
