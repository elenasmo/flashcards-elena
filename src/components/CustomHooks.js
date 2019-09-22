// import React, { useState } from 'react'

// const useSubmitForm = () => {
//   const [inputs, setInputs] = useState({})
//   const [cards, setCards] = useState({})

//   const handleSubmit = event => {
//     if (event) {
//       event.preventDefault()
//       setCards([
//         ...cards,
//         {
//           title: inputs.title,
//           question: inputs.question,
//           answer: inputs.answer
//         }
//       ])
//       return cards
//     }
//   }
//   const handleChange = event => {
//     event.persist()
//     setInputs(inputs => ({
//       ...inputs,
//       [event.target.name]: event.target.value
//     }))
//   }
//   return { handleSubmit, handleChange, inputs }
// }
// export default useSubmitForm
