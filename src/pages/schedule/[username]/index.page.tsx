/* eslint-disable react/jsx-no-comment-textnodes */
import { Avatar, Heading, Text } from "@ignite-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "../../../lib/prisma";
import { ScheduleForm } from "./ScheduleForm";
import { Container, UserHeader } from "./styles";

interface ScheduleProps {
  user: {
    name: string;
    bio: string;
    avatarUrl: string;
    social: string;
  };
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <Container>
      <UserHeader>
        <Avatar src={user.avatarUrl} />
        <Heading>{user.name}</Heading>
        <Text>{user.bio}</Text>
        {/* //TODO: Adicionar link para rede social */}
        {/* <Link href={String(user.social)} target="_blank">
          <Image src="/github.svg" alt="" width={30} height={30} />
        </Link> */}
      </UserHeader>

      <ScheduleForm />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username);

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        social: user.social,
        avatarUrl: user.avatar_url,
      },
      revalidate: 60 * 60 * 24,
    },
  };
};
