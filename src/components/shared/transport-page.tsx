import CreateTransportForm from "./create-transport-form";
import AllTransport from "./all-transport";
import AddCar from "./add-car";
import CreateTransportType from "./create-transport-type";
const TransportPage = () => {
  return (
    <div>
      <div className="flex gap-32">
        <CreateTransportForm />

        <CreateTransportType />
      </div>
      <AllTransport />
      <AddCar />
    </div>
  );
};
export default TransportPage;
