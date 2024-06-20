import { Descriptions, List, Button, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getClaimNotes,
  DeleteNotes,
  addClaimNotes,
} from "../../../Redux/Notes/notes.actions";
import toast from "react-hot-toast";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const dispatch = useDispatch();
  const { claimNotesRes} = useSelector(
    (state) => state.notes
  );
  // Fetch claim notes when the selected claim changes
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("selectedClaimRecord"))?.claimId) {
      dispatch(
        getClaimNotes(
          JSON.parse(localStorage.getItem("selectedClaimRecord"))?.claimId
        )
      );
    }
  }, [dispatch]);

  // Update notes when claimNotesRes changes
  useEffect(() => {
    if (claimNotesRes?.responseCode === 0 && claimNotesRes.data) {
      setNotes(claimNotesRes.data);
    }
  }, [claimNotesRes]);

  // Handle note deletion
  const handleDelete = (noteId) => {
    dispatch(DeleteNotes(noteId)).then(() => {
      // Update the notes list after deletion
      toast.success("Note deleted successfully");
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.notesId !== noteId)
      );
    });
  };

  // Handle note addition
  const handleAddNote = () => {
    const newNote = {
      clinicId: localStorage.getItem("clinic_id"),
      visitId: JSON.parse(localStorage.getItem("selectedClaimRecord"))?.visitId,
      claimId: JSON.parse(localStorage.getItem("selectedClaimRecord"))?.claimId,
      //   userId: JSON.parse(localStorage.getItem("selectedClaimRecord"))?.userId,
      note: noteInput,
      //   appointmentId: JSON.parse(localStorage.getItem("selectedClaimRecord"))?.appointmentId,
      patientId: JSON.parse(localStorage.getItem("selectedClaimRecord"))
        ?.patientId,
    };

    dispatch(addClaimNotes(newNote)).then(() => {
      // Fetch updated notes after adding
      dispatch(
        getClaimNotes(
          JSON.parse(localStorage.getItem("selectedClaimRecord"))?.claimId
        )
      );
      setNoteInput(""); // Clear the input field
      toast.success("Note added successfully");
    });
  };

  return (
    <div>
      <div className="nots-display-section">
        <Descriptions></Descriptions>
        <List
          size="small"
          header={<div className="notes-heading">Notes</div>}
          style={{ height: "600px" }}
          className="notes-list"
          bordered
          dataSource={notes}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Popconfirm
                  title="Are you sure you want to delete this note?"
                  onConfirm={() => handleDelete(item.notesId)}
                  onCancel={() => {}}
                  okText="Yes"
                  cancelText="No"
                  placement="topRight"
                >
                  <Button type="link">Delete</Button>
                </Popconfirm>,
              ]}
            >
              {item.notes}
            </List.Item>
          )}
        />
      </div>
      <div className="notes-add-sec">
        <textarea
          name="note"
          id="note"
          rows="4"
          cols="50"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
        ></textarea>
        <div className="send-icon-container" onClick={handleAddNote}>
          <SendRoundedIcon fontSize="large" className="sendIcon" />
        </div>
      </div>
    </div>
  );
}

export default Notes;
