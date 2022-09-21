import styles from './InnerPageContent.module.scss';

export function LoadingEffect({ loaded }: { loaded: boolean }) {
  return (
    <div
      className={`${styles['animating-on-transition']} ${
        loaded && `${styles['animate-page']}`
      }`}
    ></div>
  );
}
