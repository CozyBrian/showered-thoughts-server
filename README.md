# showered-thoughts-server
Backend for the showered thoughts web application.

<br>   

## Getting Started

Here are the routes

<br>    

### Routes


GET https://showered-thoughts.onrender.com/v1/thoughts/
> responds with an array of the thought objects. type of thought[].

<br> 

GET https://showered-thoughts.onrender.com/v1/thoughts/:id
> responds with a thought object.

<br/> 

POST https://showered-thoughts.onrender.com/v1/thoughts/
> this endpoint expects a JSON body with the author and content properties. responds with thought object with id.

<br> 

PUT https://showered-thoughts.onrender.com/v1/thoughts/:id
> this endpoint expects a JSON body with the author and content properties. responds with updated thought object with id.

<br> 

DELETE https://showered-thoughts.onrender.com/v1/thoughts/:d
> responds with the id of the deleted thought

<br> 


### Types
```ts
  type thought = {
    id: string;
    author: string;
    content: string;
  }
```