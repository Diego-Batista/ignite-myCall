import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import {
  AuthError,
  ConnectBox,
  ConnectItem,
  Container,
  Header,
  UserInfoContent,
} from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          {isSignedIn ? (
            <UserInfoContent>
              <Image
                src={session.data?.user?.image || ''}
                alt=""
                width={40}
                height={40}
              />
              <Text>{session.data?.user?.name}</Text>
            </UserInfoContent>
          ) : (
            <Text>Google Calendar</Text>
          )}

          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            parmissões de acesso ao Google Calendar.
          </AuthError>
        )}

        {/* <Text>{JSON.stringify(session.data?.user?.email)}</Text> */}
        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
