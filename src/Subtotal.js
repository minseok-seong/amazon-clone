import React from "react";
import "./Subtotal.css";
import CurrecnyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrecnyFormat
        renderText={(value) => (
          <>
            <p>
              총액 ({basket?.length}) : <strong>{value} 원</strong>
            </p>
            <small className=" subtotal_gift">
              <input type="chekbox" />
              체크박스입니다
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₩"}
      />
      <button>결제하기</button>
    </div>
  );
}

export default Subtotal;
