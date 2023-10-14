import { useEffect, useState } from "react";
import "./App.css";
import api from "./dataFetch.js";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";

function App() {
  const [groups, setGroups] = useState("priority");
  const [orders, setOrders] = useState("priority");
  const [data, setData] = useState(null);
  useEffect(() => {
    var data = window.localStorage.getItem("groups");
    if (data !== null) setGroups(JSON.parse(data));

    data = window.localStorage.getItem("orders");
    if (data !== null) setOrders(JSON.parse(data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await api();
      setData(apiData);
    };
    fetchData();
    window.localStorage.setItem("groups", JSON.stringify(groups));
    window.localStorage.setItem("orders", JSON.stringify(orders));
  }, [groups, orders]);

  // console.log(data)

  return (
    <div className="App">
      <NavBar
        groups={groups}
        setGroups={setGroups}
        orders={orders}
        setOrders={setOrders}
      />
      {data && (
        <DashBoard
          groups={groups}
          orders={orders}
          data={data}
        />
      )}
    </div>
  );
}

export default App;
