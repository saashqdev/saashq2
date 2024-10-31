import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  commentFromUser: string;
  username: string;
  userLanguage: string;
  comment: string;
  taskId: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const NewTaskCommentEmail = ({
  commentFromUser,
  username,
  userLanguage,
  comment,
  taskId,
}: VercelInviteUserEmailProps) => {
  const previewText =
    userLanguage === 'en'
      ? `New task comment from ${process.env.NEXT_PUBLIC_APP_NAME} app`
      : `Neuer Kommentar zur Aufgabe aus der App  ${process.env.NEXT_PUBLIC_APP_NAME}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              {userLanguage === 'en'
                ? 'There is a new comment on a task you are watching'
                : 'Es gibt einen neuen Kommentar zu der Aufgabe, der Sie folgen'}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              {userLanguage === 'en'
                ? `Hello ${username},`
                : `Guten Tag ${username},`}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>{commentFromUser}</strong>
              {userLanguage === 'en'
                ? ` has left a comment in Project - (Board) you are watching. `
                : ` hat einen Kommentar im Projekt hinterlassen - (Boardu), dem du folgst. `}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {userLanguage === 'en' ? `Comment: ` : `Kommentar: `}
              <strong>{comment}</strong>
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {userLanguage === 'en'
                ? `
                Details you can find here: `
                : `
                Details finden Sie hier: `}

              <strong>{`${process.env.NEXT_PUBLIC_APP_URL}/projects/tasks/viewtask/${taskId}`}</strong>
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded-md bg-slate-800 px-4 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={`${process.env.NEXT_PUBLIC_APP_URL}/projects/tasks/viewtask/${taskId}`}
              >
                {userLanguage === 'en' ? 'View task detail' : 'Aufgabe ansehen'}
              </Button>
            </Section>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              {userLanguage === 'en'
                ? `This message was intended for - `
                : `Diese Nachricht war für gedacht - `}
              <span className="text-black">{username}</span>.
              <span className="text-black"></span>.
              {userLanguage === 'en'
                ? 'If you were not expecting this message, you can ignore this email. If you are concerned about your account&apos;s safety, please reply to this email to get in touch with us.'
                : 'Wenn Sie diese Nachricht nicht erwartet haben, können Sie diese E-Mail ignorieren. Wenn Sie Bedenken hinsichtlich der Sicherheit Ihres Kontos haben, antworten Sie bitte auf diese E-Mail, um mit uns in Kontakt zu treten.'}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewTaskCommentEmail;