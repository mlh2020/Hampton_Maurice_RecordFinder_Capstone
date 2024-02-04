import RecordItem from "./RecordItem";

function RecordList({ records = [] }) {
  return (
    <div className="record-list">
      {records.map((record) => (
        <RecordItem key={record.id} record={record} />
      ))}
    </div>
  );
}

export default RecordList;
