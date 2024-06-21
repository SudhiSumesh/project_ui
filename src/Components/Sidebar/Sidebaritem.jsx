import React from "react";

function sidebarContent({
  patientName,
  dos,
  claimStatus,
  onClick,
  isSelected,
  facilityName,
}) {
  const handleClick = () => {
    onClick(); // Invoke parent component's onClick handler
  };
  //trim text
  const truncateText = (text, length) => {
    if (text?.length <= length) return text;
    return text?.slice(0, length) + "...";
  };
  return (
    <>
      <div
        style={{ width: "100%", cursor: "pointer" }}
        className={`sidebar-content ${isSelected ? "selected" : ""}`}
        // onClick={handleClick}
      >
        <div
          className="  "
          style={{
            padding: "10px",
            borderBottom: "1px solid #C1C9D2",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              border: "1px solid #8792A2",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#8792A2",
                }}
              >
                {patientName || ""}({dos || ""})
              </span>
              <a href="#">Edit</a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "#8792A2",
              }}
            >
              <span>{claimStatus || ""}</span>
              <span>{truncateText(facilityName?facilityName:"",8) || ""}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebarContent;
