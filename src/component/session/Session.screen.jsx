import React, { useEffect } from "react";
import TableSession from "./TableSession";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessionData } from "../../redux/slice/SessionSlice";
import { Spin } from "antd";

const SessionScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.session.loading);
  useEffect(() => {
    dispatch(fetchSessionData());
  }, []);
  if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <div>
      <TableSession />
    </div>
  );
};

export default SessionScreen;
