import * as S from './full-card.styles'
import { BookProps } from '@/core/types'
import { book } from '@/core/mocks/book.mock'

export const FullCard = ({
  imageUrl,
  title,
  authors,
  pageCount,
  publisher,
  published,
  language,
  isbn10,
  isbn13,
  description,
}: BookProps) => {
  const lastAuthor = authors.length - 1
  const listAuthors = authors.map((author, index) =>
    index === lastAuthor ? (
      <S.Author key={index}>{author}</S.Author>
    ) : (
      <S.Author key={index}>{author},</S.Author>
    ),
  )

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image
          width={240}
          height={356}
          src={imageUrl || book.imageUrl}
          alt={title}
          priority
        />
      </S.ImageWrapper>
      <S.Content>
        <S.MainInfoWrapper>
          <S.Title>{title}</S.Title>
          <S.AuthorsWrapper>{listAuthors}</S.AuthorsWrapper>
        </S.MainInfoWrapper>

        <S.InfoWrapper>
          <h4>Informações</h4>
          <ul>
            <S.InfoItem>
              <span>Páginas</span>
              <span>{pageCount} páginas</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>Editora</span>
              <span>Editora {publisher}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>Publicação</span>
              <span>{published}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>Idioma</span>
              <span>{language}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>ISBN-10</span>
              <span>{isbn10}</span>
            </S.InfoItem>
            <S.InfoItem>
              <span>ISBN-13</span>
              <span>{isbn13}</span>
            </S.InfoItem>
          </ul>
        </S.InfoWrapper>

        <S.DescriptionWrapper>
          <h4>Resenha da Editora</h4>
          <S.Description>
            <p>{description}</p>
          </S.Description>
        </S.DescriptionWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
