import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Text } from '@/components/atoms/Text'
import { BsChat, BsYoutube, BsInstagram } from 'react-icons/bs'
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
          <S.ColumnTitle>SOBRE NÓS</S.ColumnTitle>
          <S.Link>Blog</S.Link>
          <S.Link>Termos de uso</S.Link>
          <S.Link>Politicas de Privacidade</S.Link>
          <S.Link>Politicas de direitos autorais</S.Link>
          <S.Link>Condições de uso</S.Link>
          <S.Link>Anuncie Conosco</S.Link>
          <S.Link>Preferências de cookies</S.Link>
        </S.LinksColumn>
        <S.LinksColumn>
          <S.ColumnTitle>COMUNIDADE</S.ColumnTitle>
          <S.Link>Código de conduta</S.Link>
          <S.Link>Comunidade Questty</S.Link>
          <S.Link>Questty para educadores</S.Link>
          <S.Link>Diretrizes da comunidade</S.Link>
          <S.Link>Seja um voluntário</S.Link>
        </S.LinksColumn>
        <S.LinksColumn>
          <S.ColumnTitle>AJUDA</S.ColumnTitle>
          <S.Link>Cadastro</S.Link>
          <S.Link>Central de ajuda</S.Link>
          <S.Link>Central de segurança</S.Link>
          <S.Link>Acordo de divulgação responsável</S.Link>
          <Text style={{ marginBottom: '1rem' }} weight="semibold">
            support@questty.com
          </Text>
        </S.LinksColumn>
      </S.FooterContent>
      {/* <S.AllRightsText size="xs">
        2023 © Questty - Todos os direitos reservados
      </S.AllRightsText> */}
    </S.FooterContainer>
  )
}
