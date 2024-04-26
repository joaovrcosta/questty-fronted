import Link from 'next/link'
import * as S from '@/styles/pages/404'
import { Heading } from '@/components/atoms/Heading'
import { Error404Layout } from '@/components/layouts/error404'
import { Text } from '@/components/atoms/Text'

export default function Custom404() {
  return (
    <S.Custom404Container>
      <S.MainContent>
        <div className="">
          <Heading color="blue_550" weight="bold" size="xl">
            #404
          </Heading>
          <Text weight="extrabold">
            Parece que não existe nada <br /> nessas águas...🌊
          </Text>
          <div style={{ marginTop: '1.5rem' }}>
            <Text>
              Voltar para a <Link href="/">terra firme</Link>.
            </Text>
          </div>
        </div>
      </S.MainContent>
    </S.Custom404Container>
  )
}

Custom404.getLayout = (page: React.ReactNode) => (
  <Error404Layout>{page}</Error404Layout>
)
