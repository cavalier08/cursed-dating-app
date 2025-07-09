
export default function TextInput({fieldName, inputName, onChange}:
    {fieldName: string, inputName: string, onChange: React.ChangeEventHandler}) {
  return(
    <div className=" mb-4">
      <label>{fieldName}:</label>
      <input className="text-gray-300 p-2 rounded-sm bg-slate-700 hover:bg-slate-600 w-full"
        type="text" name={inputName} onChange={onChange}></input>
    </div>
  );
}