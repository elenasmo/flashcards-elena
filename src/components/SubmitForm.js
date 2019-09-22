// import React, { useState } from 'react'
// import styled from 'styled-components/macro'
// import useSubmitForm from './CustomHooks'
// //import Card from './Card'

// export default function SubmitForm() {
//   const { inputs, handleChange, handleSubmit } = useSubmitForm()
//   // const addCard = () => {
//   //   alert(`Card Created!
//   //          Title: ${inputs.title}  Question: ${inputs.question}
//   //          Answer: ${inputs.answer}`)
//   //}
//   //const [newCards, setNewCards] = useState([])

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             onChange={handleChange}
//             value={inputs.title}
//             required
//           />
//         </label>
//         <label>
//           Question:
//           <input
//             type="text"
//             name="question"
//             onChange={handleChange}
//             value={inputs.question}
//             required
//           />
//         </label>
//         <label>
//           Answer:
//           <input
//             type="text"
//             name="answer"
//             onChange={handleChange}
//             value={inputs.answer}
//             required // checks , if value is in input field
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }

// export default function Form() {
//   const [inputTitle, setInputTitle] = useState('');
//   const [inputQuestion, setInputQuestion] = useState('')
//   const [inputAnswer, setInputAnswer] = useState('')
//   const [cards, setCards] = useState([])
//   return (
//   <>
//         <h2>Create new card</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Title
//             <input
//               onChange={event => setInputTitle(event.target.value)}
//               value={inputTitle}
//               type="text" name="title"/>
//           </label>
//           <label>
//             Question
//             <textarea
//               onChange={event => setInputQuestion(event.target.value)}
//               value={inputQuestion}
//               name="question" cols="30"
//               rows="5">
//             </textarea>
//           </label>
//           <label>
//             Answer
//             <textarea
//               onChange={event => setInputAnswer(event.target.value)}
//               value={inputAnswer}
//               name="answer"
//               cols="30"
//               rows="5">
//             </textarea>
//           </label>
//           <label>
//             Tags
//             <input
//               name="tags"
//               placeholder="html, css"/>
//           </label>
//           <Button>Create card</Button>
//         </form>
//         {cards.map(card => (
//     <Card
//       title={card.title}
//       question={card.question}
//       answer={card.answer}/>
// ))}
//   </>
// )
// function handleSubmit(event) {
// ​
//       event.preventDefault();
// ​
//       setCards([
//         ...cards,
//         { title: inputTitle, question: inputQuestion, answer: inputAnswer }
//       ]);
//       return cards

//     }
// ​
//   }
