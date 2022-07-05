**Part 2: Written Evaluation Questions**

### Q1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

#### Q1 Answer:

##### Getting Data from an API

If this data were coming from an API instead of a JSON file, considerations would have to account for the ASYNC nature of an API request.

- The function would have to be written as an Async/Await function call
- May want to build some loading animations into UI while awaiting data
- The function would have to account for error handling
  - Possibly include some kind of error feedback in the UI

##### Using the useEffect hook for an API Call

Working with Async functions like an API call would necessitate using React's useEffect hook. The useEffect hook allows us to update the state or components once the Async function eventually returns the requested data. Additionlly, useEffect can watch for future data changes and update appropriate state/props/components when that happens.

##### Other Considerations

I would consider implementing some kind of state management tool such as the React useContext API or Redux. This would help to maintain the state accross the application as multiple Async requests come in to play. Additionally, these tools can also include useful features like memoization. This can make the application perform better by limiting additional identical requests to the API.

### Q2. Part of this application uses the package [nanoid](https://www.npmjs.com/package/nanoid) to generate keys. What issue would this cause for generating keys in React?

#### Q2 Answer:

Nanoid is not recommended for generating React keys, as each re-render generates a new nanoid, whereas React keys are supposed to stay consistent across renders. Using nanoid could cause instability in React applications. Instead, a consistent stable ID from the object should be used.

Additional details are are available in [nanoid's React Documentation](https://github.com/ai/nanoid#react).
