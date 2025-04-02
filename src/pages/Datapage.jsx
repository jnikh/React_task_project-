import { useSelector } from 'react-redux';

const DataPage = () => {
  const formData = useSelector((state) => state.form.data);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Submitted Data</h1>
      
      {formData ? (
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Name:</h3>
            <p>{formData.name}</p>
          </div>
          <div>
            <h3 className="font-medium">Email:</h3>
            <p>{formData.email}</p>
          </div>
          <div>
            <h3 className="font-medium">Message:</h3>
            <p>{formData.message}</p>
          </div>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default DataPage;