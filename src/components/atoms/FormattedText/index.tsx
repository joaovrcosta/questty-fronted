interface FormattedTextProps {
  content: string | TrustedHTML
}

const FormattedText: React.FC<FormattedTextProps> = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }}></div>
)

export default FormattedText
