import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { subWeeks } from "date-fns";
import DatePicker from "components/form/DatePicker";
import StockValuesChart from "components/stock-details/StockValuesChart";

const StockDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const symbol = params?.symbol;

  const defaultStartDate = subWeeks(new Date(), 1);
  const defaultEndDate = new Date();
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  if (!symbol) {
    navigate("/");
  }

  return (
    <div>
      <div className="flex gap-2 justify-center sm:justify-start">
        <DatePicker
          id="startDate"
          name="startDate"
          label="Start date:"
          value={startDate}
          handleChange={({ target: { valueAsDate } }) =>
            setStartDate(valueAsDate || new Date())
          }
        />
        <DatePicker
          id="endDate"
          name="endDate"
          label="End date:"
          value={endDate}
          handleChange={({ target: { valueAsDate } }) =>
            setEndDate(valueAsDate || new Date())
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <StockValuesChart
          startDate={startDate}
          endDate={endDate}
          symbol={symbol}
        />
      </div>
    </div>
  );
};

export default StockDetails;
