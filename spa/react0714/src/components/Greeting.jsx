const Greeting = ({ text, age, gender, job }) => {
  //console.log(props);
  //const { text, age, gender, job } = props;
  // const { age } = props;
  // const { gender } = props;
  // const { job } = props;

  return (
    <>
      <div>환영합니다.</div>
      <div>회원명: {text}</div>
      <div>나이: {age}</div>
      <div>성별: {gender}</div>
      <div>직업: {job}</div>
    </>
  );
};

export function User({ isAdmin }) {
  return <>{isAdmin == true ? <div className="bg-amber-400">관리자 입니다</div> : <div>일반회원 입니다</div>}</>;
}

export function List({ items }) {
  console.log(items);

  return (
    <>
      {items.map((it,idx) => (
        <div key={idx}>{it}</div>
      ))}

    </>
  );
}

export default Greeting;
