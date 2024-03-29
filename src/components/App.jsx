
import PaymentList from "./PaymentList";
import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";
import css from "../App.module.css";

console.log(css)
// const Box = ({children}) => {
//   return (
//     <div>
 
//     <p>Before</p>
//       <p>After</p>
//        {children}
//   </div>)
// }

//       const Panel = ({title, children}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };


export default function App() {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias corrupti aspernatur qui in nulla amet, dignissimos quia! Soluta maxime nesciunt reiciendis a, ea voluptates, suscipit nemo laborum numquam quibusdam similique.</p>
        
      <PageTitle>Styling React Components</PageTitle>
     
       {/* <h1>First component</h1> */}
      <PageTitle text="Payments" />
       <PaymentList payments={initialPayments}/>
       {/* <PaymentCard payment={data1} />
       <PaymentCard payment={data2} />  */}
      {/* {<ul>{[<li>1</li>, <li>2</li>, <li>3</li>]}</ul> } */}

    
{/* 
      <Panel title="Рейтинг">
        <p>First panel content</p>
      </Panel>
      <Panel title="Що це зо очки досвіду та рівні?">
        <p>Second panel content</p>
      </Panel>
      <Panel title="Як отримати більше очків досвіду?">
        <button>Third panel content</button>
      </Panel> */}
      


      {/* <Box>
        <p>Super</p>
        <a href="">1</a>
          <span></span>   
      </Box> */}


      <p>
        Hello
        <a href="">Google</a>
        <span></span>
      </p>

      
      {/* <ul>
        {[1, 2, 3, 4, 5].map((el, idx) => (
          <li key={idx}>{el}</li>
      ))}
      </ul> */}
     </div> 
    </>
  );
}
