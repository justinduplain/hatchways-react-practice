**Part 2: Written Evaluation Questions**

### Q1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

#### Q1 Answer:

##### Getting Data from an API

If this data were coming from an API instead of a JSON file, considerations would have to account for the ASYNC nature of an API request.

- The function would have to be written as an Async/Await function call
- We may want to build some loading animations into UI while awaiting data
- The function would have to account for error handling
  - And we would possibly want to include some kind of error feedback in the UI

##### Using the useEffect hook for an API Call

Working with Async functions like an API call would necessitate using React's useEffect hook. The useEffect hook allows us to update the state or components once the Async function eventually returns the requested data. Additionally, useEffect can watch for future data changes and update appropriate state/props/components when that happens.

##### Other Considerations

I would consider implementing some kind of global state management tool such as Redux. This would help to maintain state as multiple Async requests come in to play. As a bonus, these tools can also include useful features like memoization. This can make the application perform better by limiting additional identical requests to the API. Finally, it helps to seperate MVC portions of the application: the functional logic (controller) is placed into reducers and is separate from the displayed components (view).

> How could you improve your current solution if the number of blog posts was really large (for example 10,000)?

This would require some attention to the UI, for example: Paging through 1000+ pages of posts seems unreasonable; would we provide another way to filter or display the posts? Does ordinal pagination still make the most sense in this case, or should we consider a "load more" or "infinite scroll" style of display? Would we request the full count from the database, or only display that there are more pages than would reasonably be expected (eg. page 5 of more than 1,000 vs. page 5 of 2,127).

Assuming that we were actually pulling these posts from a database, I would want to have access to a pagination API. This would return only a limited number of blog posts. This greatly reduces the amount of data being loaded by the client at one time and can improve performance.

### Q2. Part of this application uses the package [nanoid](https://www.npmjs.com/package/nanoid) to generate keys. What issue would this cause for generating keys in React?

#### Q2 Answer:

Nanoid is not recommended for generating React keys, as each re-render generates a new nanoid, whereas React keys are supposed to stay consistent across renders. Using nanoid could cause instability in React applications. Instead, a consistent 'stable ID' from the object should be used. A stable ID is a unique and unchanging identifier. React expects a key to be a string that distinguishes an item from its siblings. Some examples of stable IDs are: a user ID, a database entry ID, or a post ID.

Additional details are are available in [nanoid's React Documentation](https://github.com/ai/nanoid#react).
