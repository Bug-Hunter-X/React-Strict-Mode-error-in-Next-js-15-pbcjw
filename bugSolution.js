```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <MyCustomComponent/>
    </div>
  );
}

function MyCustomComponent(){
  const [count, setCount] = useState(0);
  useEffect(()=>{console.log(count)},[count])
  return <div>Count: {count}</div>
}
```