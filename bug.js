```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic for setting the interval
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval when the component unmounts
    // or when the effect dependencies change
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```