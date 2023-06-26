# react-chat

A web application for simple chatting!

Take a look at this project on my github: https://github.com/mrafei/react-chat

## Running the application

1. In order to run the application create a `.env` file and put firebase secret variables. These are included in the zip file of project.
2. Go to root of project and execute `yarn install`, wait for yarn to install the dependencies.
3. Run `yarn dev` from command prompt and go over to `http://localhost:3000` to see the result!
4. in order to login you need to insert email and password. creating users is only available to admin on firebase console.

   I have created some users such as `m.rafei96@gmail.com`, `cindy@gmail.com` and `john@gmail.com`

## Models Schema
I did not use [bunq api](https://assignment.bunq.com/), but I tried to implement a close model.

### 1. messages collection

- `avatar`: `string`
- `conversation_id`: `string`
- `created_at`: `string`
- `name`: `string`
- `text`: `string`
- `uid`: `string`

### 2. conversations collection

- `image`: `string`
- `participants`: `array` of {`title`: `string`, `uid`: `string`}
- `participant_ids`: `array` of `string`

  this is intentionally redundant, in order to allow querying for conversations that have current uid easier.
- `created_at`: `string`
- `name`: `string`
- `text`: `string`
- `uid`: `string`


## What's Next?

These are some of the ideas to implement, but I wanted the app to remain simple and did not have more time to implement!

1. adding tests is crucial I would have loved to add unit and integration tests with `jest` and `react-testing-library`.
<br></br>
2. the UI/UX is roughly based on telegram web, but it can be improved a lot, for example adding a navbar and better presentation of chat bubbles.
<br></br>
3. Responsive design is not implemented!
<br></br>
4. multiple areas such as login, and sending a message do not have loading state that need to be implemented.
<br></br>
5. multiple actions such as sending a message do not have error handling in case of bad connection! For now only wrong login credentials has toast error handling.
<br></br>
6. firebase login system does not allow to easily add profilePhoto.
   <br></br>
   I have added the possibility of receiving avatar url from backend but for now, there is some dummy profile images in public folder which can be accessed by template `/uid-image.png`.
<br></br>
7. There’s a lot more room for improving `accessibility`, and better `semantics`.
   <br></br>
   Since the website does not include a `layout`, crucial elements such as `header`, `footer`, etc… do not exist.
   There's a lot more room for adding `aria` labels in order to make app further accessible.
   <br></br>
   For now, we only use proper semantic for `main`.
<br></br>
8. In case of long conversation chats, `pagination` and `lazy loading` messages should be implemented.
<br></br>
9. For now queries are inserted in front-end. 
   In case of having a complete backend we should make api calls to backend and replace firebase kit altogether.
<br></br>
10. We can add more lint rules such as `airbnb`. For now only the default `.eslintrc.cjs` is set to allow future improvement.