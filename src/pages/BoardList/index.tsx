import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { Header, Sidebar } from "../../components";
import { Layout } from "../../components/UI";
import { RootState } from "../../store/types";
import { getBoardList } from "../../store/actions/boardActions";
import "./styles.css";

export const DashboardView: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
  const boardList = useSelector((state: RootState) => state.boards.boardList);
  const [selectedBoard, setSelectedBoard] = useState<any | null>(boardList[0])

  useEffect(() => {
    dispatch(getBoardList())
  }, [dispatch])

  return (
    <>
      <Header heading={selectedBoard?.title} boardList={boardList} boardData={selectedBoard} setSelectedBoard={setSelectedBoard} />
      <Layout>
        <Sidebar boardList={boardList} setSelectedBoard={setSelectedBoard} selectedBoard={selectedBoard} />
        <div className="main-container">
          <div className="d-flex justify-content-start">
            {selectedBoard?.columns && selectedBoard?.columns?.map((value: any, index: Number) => (
              <div key={`column ${value.Name}`} className="column-contaner col-4 mr-1">
                <span className="heading"><h6>{value?.name}</h6></span>
              </div>
            ))
            }
          </div>

        </div>
      </Layout>
    </>

  );
};
