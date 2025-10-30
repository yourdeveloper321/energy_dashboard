import DeviceList from "../components/DeviceList";
import AlertForm from "../components/Alertform";

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Energy Devices Dashboard </h1>
      <DeviceList />
      <AlertForm />
    </div>
  );
}
