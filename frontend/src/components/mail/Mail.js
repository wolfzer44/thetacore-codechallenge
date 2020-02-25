import React, { useState } from "react"
import { Form, Input, Textarea } from "ninti"

import { Container, Title, Message } from "./styles"
import { sendMail } from "../../services/api"

export default function Mail() {
  const [mailError, setMailError] = useState(false)
  const [mailSuccess, setMailSuccess] = useState(false)

  async function handleSubmit(mail) {
    try {
      await sendMail(mail)
      setMailSuccess(true)
      setTimeout(() => {
        setMailSuccess(false)
      }, 2000)
    } catch (err) {
      setMailError(true)
      setTimeout(() => {
        setMailError(false)
      }, 2000)
    }
  }

  return (
    <Container>
      <Title>Easy way to send email!</Title>
      <Message error={mailError} success={mailSuccess}>
        {mailError ? "Something went wrong!" : ""}
        {mailSuccess ? "E-mail sent!" : ""}
      </Message>

      <Form onSubmit={handleSubmit} reset={true}>
        <Input
          name="from"
          type="text"
          placeholder="From: Matheus <wolfzera@icloud.com>"
          autoComplete="off"
          required
        />
        <Input
          name="to"
          type="email"
          placeholder="To: hireme@thetacode.com"
          autoComplete="off"
          required
        />
        <Input
          name="subject"
          type="text"
          placeholder="Subject: <CodeChallenge />"
          autoComplete="off"
          required
        />

        <Textarea
          name="text"
          placeholder="Message"
          autoComplete="off"
          rows="10"
          required
        />

        <button type="submit">send email</button>
      </Form>
    </Container>
  )
}
