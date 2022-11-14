import DOMPurify from "dompurify";

const DangerHtml: React.FC<{ text: string }> = ({ text }) => {
  const sanitizedText = DOMPurify.sanitize(text);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
};

export default DangerHtml;
