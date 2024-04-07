import css from './Description.module.css';

export default function Description() {
  return (
    <div className={css.descWrapper}>
      <h1 className={css.descTitle}>Sip Happens Café</h1>
      <p className={css.descParagraph}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
