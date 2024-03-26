
import PaymentList from "./PaymentList";
import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";

export default function App() {
  return (
    <>
       <h1>First component</h1>
      <PageTitle text="Payments"/>
       {/* <PaymentCard payment={data1} />
       <PaymentCard payment={data2} />  */}
      {/* {<ul>{[<li>1</li>, <li>2</li>, <li>3</li>]}</ul> } */}

<PaymentList payments={initialPayments}/>
      
      {/* <ul>
        {[1, 2, 3, 4, 5].map((el, idx) => (
          <li key={idx}>{el}</li>
      ))}
      </ul> */}
      
    </>
  );
}
