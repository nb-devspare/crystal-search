# Crystal Search 

This project is a prototype search website for Crystal Structures published  in https://datacite.org/

## Getting started

In the project directory, run:

- ### `npm install`

- ### `npm run start`

The application will be available on the local machine at.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## TODO next
1. **Add tests on components**: there are already several component and before to add more
tests need to be in place
1. **Add e2e test**
1. **Add a single Structure to the store**: at now StructureDetails is executing a new REST call;
double check if the information to visualize need a new call; or the data from the search results were enough.
In that case add the data to the redux store from the ListStructureResults
1. **Accessibility**: check which features are available in Bulma
1. **Handle errors**:
   1. action creators calls: dispatch error on axios calls and other business errors
   1. component visualization: visualize the error or redirect to an error page
1. **Search query in the store**: it can be re-used in different components. e.g. SearchBox
1. **Pagination**: add a pagination component, check if SearchResults.links is enough.
Continuous loading or real pages?
1. **Facet filtering**: add the possibility to interact with filtering on facets
1. **Explore relatedIdentifiers**: look at SearchEntry.attributes.relatedIdentifiers and check if
Structures can be link each other (references)
1. **Improve loading**: look for a better loading animation.