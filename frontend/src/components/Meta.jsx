import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: ' ShoppersHub',
  description: 'Branded Clothes and shoes for men and women in affordable prices',
  keywords: 'Clothing and Footwears',
};

export default Meta;
