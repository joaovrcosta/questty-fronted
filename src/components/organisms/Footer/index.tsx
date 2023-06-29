import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Text } from '@/components/atoms/Text'
import { BsWhatsapp, BsChat, BsYoutube, BsInstagram } from 'react-icons/bs'
import Image from 'next/image'

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoColumn>
          <Image src={logoImg} alt="" />
          <S.FollowUs>
            <Text size="lg">Redes sociais</Text>
          </S.FollowUs>
          <S.SocialMediaContainer>
            <S.CircleIcon>
              <BsYoutube size={18} color="#000" />
            </S.CircleIcon>
            <S.CircleIcon>
              <BsInstagram size={18} color="#000" />
            </S.CircleIcon>
          </S.SocialMediaContainer>
        </S.LogoColumn>
        <S.LinksColumn>
          <S.ColumnTitle size="lg" weight="semibold">
            Sobre nós
          </S.ColumnTitle>
          <S.Link>Home</S.Link>
          <S.Link>Sobre nós</S.Link>
          <S.Link>Carreiras</S.Link>
        </S.LinksColumn>
        <S.LinksColumn>
          <S.ColumnTitle size="lg" weight="semibold">
            Ajuda
          </S.ColumnTitle>
          <S.Link>Ajuda</S.Link>
          <S.Link>Termos de uso</S.Link>
          <S.Link>Politicas de Privacidade</S.Link>
          <S.Link>FAQ</S.Link>
        </S.LinksColumn>
        <S.LinksColumn>
          <S.ColumnTitle size="lg" weight="semibold">
            Ajuda
          </S.ColumnTitle>
          <S.TalkToUs>
            <BsChat size={16} color="#000" />
            <S.LinkTalkToUs>Fale Conosco</S.LinkTalkToUs>
          </S.TalkToUs>
          <Text style={{ marginBottom: '1rem' }} weight="semibold">
            support@questty.com
          </Text>
          <S.Link>
            Horário de atendimento de segunda à sexta, das 8h às 18h.
          </S.Link>
        </S.LinksColumn>
      </S.FooterContent>
      {/* <S.AllRightsText size="xs">
        2023 © Questty - Todos os direitos reservados
      </S.AllRightsText> */}
    </S.FooterContainer>
  )
}
